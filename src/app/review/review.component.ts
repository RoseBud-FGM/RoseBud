import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp  } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc} from "firebase/firestore";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  auth: any
  colRef = collection(this.db, "report");
  reports: any[] = [];
  constructor(private router: Router) {
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
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
      } else {
        this.router.navigate(['/login-org']);
      }
    });
  }
  ngOnInit(): void {}
  async changeBackground(report: { media: string; status: string, id: string}) {
    report.media = '../../assets/images/accepted.png';
    report.status= "Accepted";
    await updateDoc(doc(this.db, "report", report.id), {
      status: "Accepted",
      org: "Rosebud Organisation"
    })
  }
}