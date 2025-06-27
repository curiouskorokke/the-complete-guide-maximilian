import { Component } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/users.mock-data';

// @Component: Decorators is a typescript feature that is used to add metadata & configuration to classes
@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  protected title = 'the-complete-guide-maximilian';
}
