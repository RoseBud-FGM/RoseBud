import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp  } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, doc} from "firebase/firestore";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  auth: any
  userId: any
  colRef = collection(this.db, "post");
  posts: any[] = [];

  constructor(private router: Router) {
        getDocs(this.colRef).then((snapshot)=> {
          snapshot.docs.forEach((doc) => {
            this.posts.push(
              {
                id: doc.id,
                title: doc.data()['title'],
                author: doc.data()['author'],
                desc: doc.data()['desc'],
                likesCount: doc.data()['likesCount'],
                date: doc.data()['date'],
                dislikesCount: doc.data()['dislikesCount']
              }
            )
          })
        })
    }
    ngOnInit(): void {
        
    }
    newPost() {
      this.auth = getAuth();
      onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        // this.orgId = user.uid;
        let title = prompt("Please a post title:");
        let desc = prompt("Please a description:");
        if (desc == null || desc == "" || title == null || title == "") {
          alert("Incomplete post!");
        } else {
          const date = new Date();
          getDocs(collection(this.db, "user")).then((snapshot)=> {
            snapshot.docs.forEach(async (doc) => {
              if(doc.id == user.uid)
              {
                 const uname = doc.data()['name'];
                 const docRef = await addDoc(collection(this.db, "post"), {author: uname, commentsCount: 0, likesCount: 0, dislikesCount: 0, desc: desc, title: title, date: date.toString()});
                 this.router.navigate(['/forum']);
              }
            })})
        }
      }
      else {
        this.router.navigate(['/login-org']);
      }
    })
}}