import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'development server', content: 'Local server for FE dev team'},
  {type: 'blueprint', name: 'production staging server', content: 'Server for testing in production'}
  ];
  newServerName = '';
  newServerContent = '';

}
