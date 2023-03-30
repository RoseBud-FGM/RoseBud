import { Component, OnInit } from '@angular/core';
import { Report } from '../items/report'
import { environment  } from '../../environments/environment';

import { initializeApp  } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  colRef = collection(this.db, "report");
  reports: Report[] = [];
  constructor() {
    getDocs(this.colRef).then((snapshot)=> {
      snapshot.docs.forEach((doc) => {
        // let ts = new Date(doc.data()['timestamp'].seconds).toString()
        this.reports.push(
          {
            id: doc.id,
            name: doc.data()['name'],
            location: doc.data()['location'],
            phone: doc.data()['phone'],
            email: doc.data()['email'],
            desc: doc.data()['desc'],
            age: doc.data()['age'],
            status: doc.data()['status'],
            date: doc.data()['date'],
            org: doc.data()['org'],
          }
        )
      })
    })
  }
  ngOnInit(): void {}
}