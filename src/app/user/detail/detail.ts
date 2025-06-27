import { Component, Input } from '@angular/core';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class UserDetailComponent {
  @Input({ required: true }) user!: UserInterface;
}
