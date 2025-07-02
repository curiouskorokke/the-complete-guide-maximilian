import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from './task.model';
import { SharedCardComponent } from '../../shared/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskInterface;
  @Output() taskComplete = new EventEmitter<string>();
  onTaskComplete(taskId: string) {
    this.taskComplete.emit(taskId);
  }
}
