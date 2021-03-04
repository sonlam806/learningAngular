import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user = { name: '', id: '' };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      name: this.route.snapshot.params['name'],
      id: this.route.snapshot.params['id'],
    };

    this.route.params.subscribe((params: Params) => {
      this.user.name = params['name'];
      this.user.id = params['id'];
    });
  }
}

