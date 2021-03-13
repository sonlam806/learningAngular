import { Injectable } from '@angular/core';
import { Server } from './server.model';

@Injectable()
export class ServerService {
  private servers: Server[] = [
    {
      name: 'production server',
      size: 'medium',
      createdAt: new Date().toString(),
      status: 'stable',
    },
    {
      name: 'user database',
      size: 'large',
      createdAt: new Date().toString(),
      status: 'stable',
    },
    {
      name: 'development server',
      size: 'small',
      createdAt: new Date().toString(),
      status: 'offline',
    },
    {
      name: 'testing enviroment server',
      size: 'small',
      createdAt: new Date().toString(),
      status: 'stable',
    },
  ];

  getServers() {
    return this.servers.slice();
  }
}

