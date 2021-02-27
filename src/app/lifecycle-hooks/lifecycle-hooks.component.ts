import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css'],
})
export class LifecycleHooksComponent implements OnInit {
  @Input() user: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('ngOnChanges', changes);
  }
}
