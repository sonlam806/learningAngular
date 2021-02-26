import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'shindo';
  showSecret = false;
  clicksTime : Array<string>= [];

  onToggleShowSecret() {
    this.showSecret = !this.showSecret;
    this.clicksTime.push(new Date().toString())
  }
}
