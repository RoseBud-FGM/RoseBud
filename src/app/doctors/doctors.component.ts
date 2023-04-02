import { Component, OnInit } from '@angular/core';
import { environment  } from "../../environments/environment";

import { initializeApp  } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  colRef = collection(this.db, "doctor");
  doctors: any[] = [];
  constructor() {
    getDocs(this.colRef).then((snapshot)=> {
      snapshot.docs.forEach((doc) => {
        this.doctors.push(
          {
            id: doc.id,
            avatar: doc.data()['avatar'],
            name: doc.data()['name'],
            location: doc.data()['location'],
            phone: doc.data()['phone'],
            email: doc.data()['email'],
            rating: doc.data()['rating'],
            desc: doc.data()['desc']
          }
        )
      })
      console.log("Hagu");
    })
  }
  ngOnInit(): void {}
}
