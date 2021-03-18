import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsURL =
    'https://angular-http-request-abcd3-default-rtdb.firebaseio.com/posts.json';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(post: Post) {
    this.http
      .post<{ name: string }>(this.postsURL, post, { observe: 'response' })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (err) => this.error.next(err.message)
      );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(this.postsURL).pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            let post = responseData[key];
            postsArray.push({ ...post, id: key });
          }
        }

        return postsArray;
      })
    );
  }

  deletePosts() {
    return this.http.delete(this.postsURL);
  }
}

