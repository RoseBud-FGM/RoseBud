import { Component, OnInit } from '@angular/core';
import { Report } from '../../items/report'
import { environment  } from "../../../environments/environment";

import { initializeApp  } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  colRef = collection(this.db, "report");
  reports: Report[] = [];
  constructor() {
    getDocs(this.colRef).then((snapshot)=> {
      snapshot.docs.forEach((doc) => {
        let ts = new Date(doc.data()['timestamp'].seconds).toString()
        console.log(doc.data()['location'])
        this.reports.push(
          {
            id: doc.id,
            name: doc.data()['name'],
            location: doc.data()['location'],
            phone: doc.data()['phone'],
            email: doc.data()['email'],
            desc: doc.data()['desc'],
            age: doc.data()['age'],
            timestamp: ts
          }
        )
      })
    })
  }
  ngOnInit(): void {}
}
