import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/user-service/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getAllUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  getUser(user: User): void {
    this.httpClientService.getUser(user)
      .subscribe( data => {
       this.users = this.users.filter(u => u !== user);
    })
 };
}
