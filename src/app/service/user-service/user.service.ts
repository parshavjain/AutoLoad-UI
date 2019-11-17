import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
  constructor(
    public username: string,
    public name: string,
    public isAdmin: boolean,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllUsers() {
    return this.httpClient.get<User[]>('http://localhost:8082/api/user');
  }

  public getUser(user) {
    return this.httpClient.delete<User>("http://localhost:8082/api/user" + "/" + user.username);
  }
}