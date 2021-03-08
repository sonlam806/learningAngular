import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';

interface IServer {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<IServer> {
  constructor(private serversService: ServerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IServer> | Promise<IServer> | IServer {
    return this.serversService.getServer(+route.params['id']);
  }
}

