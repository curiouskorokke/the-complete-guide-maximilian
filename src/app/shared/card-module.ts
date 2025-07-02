import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from './card/card';

@NgModule({
  declarations: [SharedCardComponent],
  imports: [CommonModule],
  exports: [SharedCardComponent],
})
export class SharedModule {}
