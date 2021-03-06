import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../server.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css'],
})
export class ServerEditComponent implements OnInit {
  server: Server = {
    id: 0,
    name: '',
    status: '',
  };
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.server = this.serversService.getServer(2);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
}

