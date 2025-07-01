import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from './user.interface';
import { SharedCardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [SharedCardComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserInterface;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selectedUser = new EventEmitter<string>();
  get userAvatarImg() {
    return 'users/' + this.user.avatar;
  }

  randomNumber(length: number) {
    return Math.floor(Math.random() * length);
  }

  onSelectUser(id: string) {
    this.selectedUser.emit(id);
  }
}
