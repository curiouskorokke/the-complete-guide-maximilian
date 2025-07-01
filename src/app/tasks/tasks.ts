import { Component, Input } from '@angular/core';
import { UserInterface } from '../user/user.interface';
import { TaskComponent } from './task/task';
import { DUMMY_TASKS } from './tasks.mock-data';
import { TaskCreateComponent } from './create/create';
import { TaskInterface } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskCreateComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: UserInterface;
  tasks = DUMMY_TASKS;
  showTaskForm = false;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }

  onTaskComplete(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartTaskCreate() {
    this.showTaskForm = true;
  }

  onDialogClose() {
    this.showTaskForm = false;
  }
  onTaskCreate(task: TaskInterface) {
    this.tasks.push(task);
    this.onDialogClose();
  }
}
