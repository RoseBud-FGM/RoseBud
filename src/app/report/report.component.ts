import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  public app: any;
  public db: any;
  public myForm: FormGroup;
  constructor() {
    this.app = initializeApp(environment.firebase);
    this.db = getFirestore(this.app);
    this.myForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      age: new FormControl(),
      phone: new FormControl(),
      location: new FormControl(),
      desc: new FormControl()
    });
  }
  async submitReport() {
    this.myForm.value.status = "Pending";
    this.myForm.value.org = null;
    let date = new Date()
    this.myForm.value.date = date.toString();
    const docRef = await addDoc(collection(this.db, "report"), this.myForm.value);
    console.log("Document written with ID: ", docRef.id);
    console.log(this.myForm.value);
    alert("Report Submitted!, Report ID: " + docRef.id);
  }
}
