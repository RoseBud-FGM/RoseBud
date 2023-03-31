import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  public app: any;
  public db: any;
  public myForm: FormGroup;
  constructor() {
    this.app = initializeApp(environment.firebase);
    this.db = getFirestore(this.app);
    this.myForm = new FormGroup({
      reportid: new FormControl()
    })
  }

  async query() {
    const docRef = collection(this.db, "report");
    getDocs(docRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if(doc.id.toString() == this.myForm.value.reportid) {
          console.log(doc.data());
          document.getElementById("report_id")!.innerText = "Report ID: " + doc.id;
          document.getElementById("reported_by")!.innerText = "Reported by:  " + doc.data()["name"];
          document.getElementById("reported_on")!.innerText = "Reported on: " + doc.data()["date"];
          document.getElementById("status")!.innerText = "Current Status: " + doc.data()["status"];
          document.getElementById("org")!.innerText = "Accepting org: " + doc.data()["org"];
          document.getElementById("result")?.removeAttribute("hidden");
        }
        })  
      }
    )
  }
}
