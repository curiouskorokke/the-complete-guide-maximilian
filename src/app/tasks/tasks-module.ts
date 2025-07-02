import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks';
import { TaskCreateComponent } from './create/create';
import { SharedModule } from '../shared/card-module';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task';

@NgModule({
  declarations: [TasksComponent, TaskComponent, TaskCreateComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
