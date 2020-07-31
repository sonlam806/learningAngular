import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  styleUrls: ['./app.component.scss'],
  template: `<h1>Hello John Doe</h1>`,
})
export class Hello {
  title = 'learningAngular';
  user = {
    name: 'Shindo',
    age: 27,
  };
}
