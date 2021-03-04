import { Component, Input, OnInit } from '@angular/core';

import { Server } from '../server.model'

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {
  @Input() server: Server = {name: '', status: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
