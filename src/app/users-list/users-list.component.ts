import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users = [];

  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => this.users = data);
  }

}
