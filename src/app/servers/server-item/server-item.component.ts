import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Server } from '../server.model';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css'],
})
export class ServerItemComponent implements OnInit {
  server: Server = { id: 0, name: '', status: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }
}

