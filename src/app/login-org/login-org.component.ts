import { Router } from '@angular/router';

import { Component, Injectable, OnInit } from '@angular/core';
import { environment  } from '../../environments/environment';

import { FormGroup, FormControl } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login-org',
  templateUrl: './login-org.component.html',
  styleUrls: ['./login-org.component.css']
})
@Injectable()
export class LoginOrgComponent implements OnInit {
  app: any
  email: any;
  password: any;
  public loginOrg: FormGroup;
  constructor(private router: Router) {
    this.app = initializeApp(environment.firebase);
    this.loginOrg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  ngOnInit(): void {}
  async login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.loginOrg.value.email, this.loginOrg.value.password).then((userCredential) => {
        const user = userCredential.user;
        console.log("Login Successful!");
        (window as any).loggedIn = true;
        this.router.navigate(['/review']);
      })
      .catch((error) => {
        alert("Invalid Login credentials");
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message);
      });
  }
}
