import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyPageComponent } from './faculty-page/faculty-page.component';

@NgModule({
  imports: [CommonModule, FacultyRoutingModule, FacultyPageComponent],
})
export class FacultyModule {}
