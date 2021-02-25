import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'shindo';
  showSecret = false;
  clicksTime : Array<number>= [];

  onToggleShowSecret() {
    this.showSecret = !this.showSecret;
    this.clicksTime.push(this.clicksTime.length + 1)
  }
}
