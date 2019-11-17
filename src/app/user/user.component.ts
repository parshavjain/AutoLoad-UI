import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../service/user-service/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  getUser(user: User): void {
    this.userService.getUser(user)
      .subscribe( data => {
       this.users = this.users.filter(u => u !== user);
    })
 };
}
