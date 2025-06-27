import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  get userAvatarImg() {
    return 'users/' + this.avatar;
  }

  randomNumber(length: number) {
    return Math.floor(Math.random() * length);
  }
}
