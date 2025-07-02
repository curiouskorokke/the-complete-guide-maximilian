import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/users.mock-data';
import { UserInterface } from './user/user.interface';

// @Component: Decorators is a typescript feature that is used to add metadata & configuration to classes
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class AppComponent {
  protected title = 'the-complete-guide-maximilian';
  users = DUMMY_USERS;
  currentUser?: UserInterface;

  handleSelectedUser(id: string) {
    this.currentUser = this.users.find((user) => user.id === id);
  }
}
