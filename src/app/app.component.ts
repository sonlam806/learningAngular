import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  location: string = 'recipes';

  onChangeLocation(newLocation: string) {
    this.location = newLocation;
  }
}
