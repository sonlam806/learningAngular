import {User} from './user.model'

export class UserService {
  private users: User[] = [
    {name: 'Shindo', id: 'qwe-123'},
    {name: 'Hikaru', id: 'rty-456'},
    {name: 'Sai', id: 'zxc-789'},
  ]

  constructor() {
  }


  getUsers() {
    return this.users.slice();
  }
}
