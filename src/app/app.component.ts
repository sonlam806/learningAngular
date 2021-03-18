import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post } from './post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('postForm') postForm!: NgForm;
  loadedPosts: Post[] = [];
  isLoading = false;
  fetchPostsSub!: Subscription;
  error: string | null = null;
  errorSub!: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(
      (err) => (this.error = err)
    );
    this.isLoading = true;
    this.fetchPostsSub = this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isLoading = false;
      },
      (err) => {
        this.error = err.message;
      }
    );
  }

  onCreatePost(post: Post) {
    this.postsService.createAndStorePost(post);

    this.postForm.reset();
  }

  onFetchPosts() {
    this.isLoading = true;
    this.fetchPostsSub = this.postsService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
      this.isLoading = false;
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy() {
    this.fetchPostsSub.unsubscribe();
    this.errorSub.unsubscribe();
  }
}

