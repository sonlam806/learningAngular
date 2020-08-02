import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learningAngular';
  serverName = 'test server';

  createServerName(event): void {
    this.serverName = event.target.value;
  }
}
