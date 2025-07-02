import { Injectable } from '@angular/core';
import { TaskInterface } from './task/task.model';
import { DUMMY_TASKS } from './tasks.mock-data';

@Injectable()
export class TasksService {
  tasks: TaskInterface[] = DUMMY_TASKS;
  getTasks(userId: string): TaskInterface[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  addTask(task: TaskInterface) {
    this.tasks.push(task);
  }
}
