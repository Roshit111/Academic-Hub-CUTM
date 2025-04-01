import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPageComponent } from './student-page/student-page.component';
import { NotFoundComponent } from '../Shared/not-found/not-found.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetComponent } from './reset/reset.component';
import { CourseComponent } from './course/course.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ScheduleInformationComponent } from './schedule-information/schedule-information.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPageComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      {
        path: 'menu',
        component: NavigationMenuComponent,
        data: { title: 'Student Dashboard || CUTM' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'My Profile || CUTM' },
      },
      {
        path: 'reset',
        component: ResetComponent,
        data: { title: 'Change Password || CUTM' },
      },
      {
        path: 'course',
        component: CourseComponent,
        data: { title: 'My Courses || CUTM' },
      },{
        path: 'attendance',
        component: AttendanceComponent,
        data: { title: 'My Attendance || CUTM' },
      },{
        path: 'timetable',
        component: ScheduleInformationComponent,
        data: { title: 'My Courses || CUTM' },
      },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
