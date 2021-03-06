import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../server.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css'],
})
export class ServerDetailComponent implements OnInit {
  server: Server = { id: 0, name: '', status: '' };

  constructor(
    private serversService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }

  onEdit() {
    const id = +this.route.snapshot.params['id'];
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}

