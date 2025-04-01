import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentPageComponent } from './student-page/student-page.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, StudentRoutingModule, StudentPageComponent],
})
export class StudentModule {}
