import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // @ts-ignore
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    const countObs = new Observable((subscriber) => {
      let count = 0;
      setInterval(() => {
        subscriber.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubscription = countObs.subscribe((count) => {
      return count;
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}

