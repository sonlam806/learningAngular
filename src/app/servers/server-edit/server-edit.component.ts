import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  allowEdit = false;

  constructor(
    private serversService: ServerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });

    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
}

