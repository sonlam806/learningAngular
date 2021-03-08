import { Server } from './server.model';
export class ServerService {
  private servers: Server[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
    },
  ];

  getServers() {
    return this.servers.slice();
  }

  getServer(id: number) {
    const server = this.servers.find((server) => server.id === id);
    if (!server) return { id: 0, name: '', status: '' };

    return server;
  }

  updateServer(id: number, newServerInfo: { name: string; status: string }) {
    let matchedServer = this.servers.find((server) => server.id === id);
    if (matchedServer) {
      matchedServer.name = newServerInfo.name;
      matchedServer.status = newServerInfo.status;
    }
  }
}
