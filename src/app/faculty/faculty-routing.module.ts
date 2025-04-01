import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetComponent } from './reset/reset.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from '../Shared/not-found/not-found.component';
import { FacultyPageComponent } from './faculty-page/faculty-page.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ReportsAnalyticsComponent } from './reports-analytics/reports-analytics.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { ScheduleInformationComponent } from './schedule-information/schedule-information.component';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path: '',
    component: FacultyPageComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      {
        path: 'menu',
        component: NavigationMenuComponent,
        data: { title: 'Faculty Dashboard || CUTM' },
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
        component: CourseInformationComponent,
        data: { title: 'My Courses || CUTM' },
      },
      {
        path: 'attendance',
        component: AttendanceManagementComponent,
        data: { title: 'Attendance Management || CUTM' },
      },
      {
        path: 'take-attendance',
        component: TakeAttendanceComponent,
        data: { title: 'Take Attendance || CUTM' },
      },
      {
        path: 'view-attendance',
        component: ViewAttendanceComponent,
        data: { title: 'View Attendance || CUTM' },
      },
      {
        path: 'timetable',
        component: ScheduleInformationComponent,
        data: { title: 'Time Table || CUTM' },
      },
      {
        path: 'reports',
        component: ReportsAnalyticsComponent,
        data: { title: 'Reports & Analytics || CUTM' },
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
export class FacultyRoutingModule {}
