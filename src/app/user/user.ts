import { Component, Input } from '@angular/core';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserInterface;
  get userAvatarImg() {
    return 'users/' + this.user.avatar;
  }

  randomNumber(length: number) {
    return Math.floor(Math.random() * length);
  }
}
