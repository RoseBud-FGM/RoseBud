import { Component, OnInit } from '@angular/core';
import { environment  } from "../../environments/environment";

import { initializeApp  } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  colRef = collection(this.db, "post");
  posts: any[] = [];
  constructor() {
    getDocs(this.colRef).then((snapshot)=> {
      snapshot.docs.forEach((doc) => {
        this.posts.push(
          {
            id: doc.id,
            title: doc.data()['title'],
            author: doc.data()['author'],
            message: doc.data()['message'],
            commentsCount: doc.data()['commentsCount'],
            likesCount: doc.data()['likesCount'],
            dislikesCount: doc.data()['dislikesCount'],
          }
          )
          })
      console.log("Hagu");
    })
  }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}