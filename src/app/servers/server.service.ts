import { Server } from './server.model'
export class ServerService {
  private servers: Server[] = [
    new Server('Production Server', 'hidden'),
    new Server('Development Server', 'online'),
    new Server('Staging Server', 'offline'),
  ]

  getServers() {
    return this.servers.slice();
  }
}
