import { Component, inject, Input } from '@angular/core';
import { UserInterface } from '../user/user.interface';
import { TaskComponent } from './task/task';
import { TaskCreateComponent } from './create/create';
import { TaskInterface } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  providers: [TasksService],
  standalone: false,
})
export class TasksComponent {
  tasksService = inject(TasksService);
  @Input({ required: true }) user!: UserInterface;

  showTaskForm = false;

  get userTasks() {
    return this.tasksService.getTasks(this.user.id);
  }

  onTaskComplete(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }

  onStartTaskCreate() {
    this.showTaskForm = true;
  }

  onDialogClose() {
    this.showTaskForm = false;
  }
  onTaskCreate(task: TaskInterface) {
    this.tasksService.addTask(task);
    this.onDialogClose();
  }
}
