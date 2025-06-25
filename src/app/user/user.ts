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

  user = this.dummyUsers[this.randomNumber(this.dummyUsers.length)];

  get userAvatarImg() {
    return 'users/' + this.user.avatar;
  }

  randomNumber(length: number) {
    return Math.floor(Math.random() * length);
  }

  onSelectUser() {
    this.user = this.dummyUsers[this.randomNumber(this.dummyUsers.length)];
  }
}
