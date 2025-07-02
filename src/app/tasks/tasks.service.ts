import { Injectable } from '@angular/core';
import { TaskInterface } from './task/task.model';

@Injectable()
export class TasksService {
  tasks: TaskInterface[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (!tasks) return;

    this.tasks = JSON.parse(tasks);
  }
  getTasks(userId: string): TaskInterface[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.setTasksToLocal();
  }

  addTask(task: TaskInterface) {
    this.tasks.push(task);
    this.setTasksToLocal();
  }

  setTasksToLocal() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
