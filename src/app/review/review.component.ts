import { Component, OnInit } from '@angular/core';
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
  
  reports: any[] = [];
  constructor() {
    getDocs(this.colRef).then((snapshot)=> {
      snapshot.docs.forEach((doc) => {
        let media = doc.data()['status'] == "Accepted" ? "../../assets/images/accepted.png" : "../../assets/images/pending.png";
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
            media: media
          }
        )
        
      })
      
    })
  }
  ngOnInit(): void {}
  changeBackground(report: { media: string;status: string }) {
    report.media = '../../assets/images/accepted.png';
    report.status= "Accepted";
    
  }
}