import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  onCreatePost(post: Post) {
    this.http
      .post(
        'https://angular-http-request-abcd3-default-rtdb.firebaseio.com/posts.json',
        post
      )
      .subscribe((responseData) => console.log(responseData));
  }

  onFetchPosts() {}

  onClearPosts() {}
}

