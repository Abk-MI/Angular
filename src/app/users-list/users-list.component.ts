import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  template: `
    <table>
      <th colspan="7">users</th>
      <tr>
        <td>Id</td>        
        <td>First Name</td>
        <td>Last Name</td>       
        <td class="absorbing-column">Email</td>
        <td>Age</td>
      </tr>
      <tr *ngFor="let user of users">
        <td>{{user.id}}</td>        
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>       
        <td class="absorbing-column">{{user.email}}</td>
        <td>{{user.age}}</td>
        <td><button>Modifier</button></td>
        <td><button (click)="onDeleteHandler(user)">Supprimer</button></td>
      </tr>
    </table>
  `,
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users = [];

  public user;

  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => this.users = data);
  }

  onDeleteHandler(user){
    
      this._userService.deleteUser(user.id)
            .subscribe(
                result => console.log(result)
        );
  }

}