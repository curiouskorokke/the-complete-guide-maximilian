import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from './task.model';
import { SharedCardComponent } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [SharedCardComponent],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TaskInterface;
  @Output() taskComplete = new EventEmitter<string>();
  onTaskComplete(taskId: string) {
    this.taskComplete.emit(taskId);
  }
}
