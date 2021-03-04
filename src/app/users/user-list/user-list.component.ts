import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {UserService} from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private usersService: UserService) {
    this.users = this.usersService.getUsers();
  }

  ngOnInit(): void {
  }

}
