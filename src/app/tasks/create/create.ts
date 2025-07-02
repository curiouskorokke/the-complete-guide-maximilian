import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskInterface } from '../task/task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './create.html',
  styleUrl: './create.css',
  standalone: false,
})
export class TaskCreateComponent {
  @Input({ required: true }) userId!: string;
  @Output() dialogClose = new EventEmitter<void>();
  @Output() newTaskCreate = new EventEmitter<TaskInterface>();
  inputTitle = '';
  inputSummary = '';
  inputDate = '';

  onClose() {
    this.dialogClose.emit();
  }

  createNewTask() {
    this.newTaskCreate.emit({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.inputTitle,
      summary: this.inputSummary,
      dueDate: this.inputDate,
    });
  }
}
