import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private id: any;
  public app: any;
  public db: any;
  public post: any;
  comments: any[] = [];
  constructor(private _Activatedroute:ActivatedRoute) {
    this.app = initializeApp(environment.firebase);
    this.db = getFirestore(this.app);
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    const docRef = collection(this.db, "post");
    getDocs(docRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if(doc.id.toString() == this.id) {
          this.post = doc.data();
        }
      })

      this.post.comments.forEach((comment: string) => {
        getDocs(collection(this.db, "comment")).then((snapshot)=> {
          snapshot.docs.forEach((doc) => {
            if(doc.id.toString() == comment) {
              this.comments.push({
                id: doc.id,
                body: doc.data()['body'],
                author: doc.data()['author'],
                date: doc.data()['date'],
                likesCount: doc.data()['likesCount'],
                dislikesCount: doc.data()['dislikesCount']
              })
            }
          }
        )})
    })
  })}
  async like() {
    this.post.likesCount += 1;
    await updateDoc(doc(this.db, "post", this.id), {
      likesCount: this.post.likesCount
    });
    document.getElementById("react-like")?.setAttribute("disabled", "");
  }
  async dislike() {
    this.post.dislikesCount += 1;
    await updateDoc(doc(this.db, "post", this.id), {
      dislikesCount: this.post.dislikesCount
    });
    document.getElementById("react-dislike")?.setAttribute("disabled", "");
  }
  async like_comm(comment: {id: string, likesCount: number, dislikesCount: number}) {
    comment.likesCount += 1;
    await updateDoc(doc(this.db, "comment", comment.id), {
      likesCount: comment.likesCount
    });
  }
  async dislike_comm(comment: {id: string, likesCount: number, dislikesCount: number}) {
    comment.dislikesCount += 1;
    alert(comment.id.toString())
    await updateDoc(doc(this.db, "comment", comment.id), {
      dislikesCount: comment.dislikesCount
    });
  }
  ngOnInit(){}
}
