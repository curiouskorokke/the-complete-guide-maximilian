import { Component } from '@angular/core';
import { Header } from './header/header';
import { DUMMY_USERS } from './user/users.mock-data';
import { UserComponent } from './user/user';
import { UserInterface } from './user/user.interface';
import { TasksComponent } from './tasks/tasks';

// @Component: Decorators is a typescript feature that is used to add metadata & configuration to classes
@Component({
  selector: 'app-root',
  imports: [Header, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected title = 'the-complete-guide-maximilian';
  users = DUMMY_USERS;
  currentUser?: UserInterface;

  handleSelectedUser(id: string) {
    this.currentUser = this.users.find((user) => user.id === id);
  }
}
