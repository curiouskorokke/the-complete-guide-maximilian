import { Component } from '@angular/core';
import { DUMMY_USERS } from './users.mock-data';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  dummyUsers = DUMMY_USERS;

  user = this.dummyUsers[Math.floor(Math.random() * this.dummyUsers.length)];
}
