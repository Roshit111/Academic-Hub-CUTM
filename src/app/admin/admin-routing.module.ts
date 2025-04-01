import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetComponent } from './reset/reset.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NotFoundComponent } from '../Shared/not-found/not-found.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { FacultyManagementComponent } from './faculty-management/faculty-management.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { AttendanceTrackingComponent } from './attendance-tracking/attendance-tracking.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { ReportsAnalyticsComponent } from './reports-analytics/reports-analytics.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { FacultyAttendanceComponent } from './faculty-attendance/faculty-attendance.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      {
        path: 'menu',
        component: NavigationMenuComponent,
        data: { title: 'Admin Dashboard || CUTM' },
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
        path: 'admin-manage',
        component: AdminManagementComponent,
        data: { title: 'Admin Management || CUTM' },
      },
      {
        path: 'add-admin',
        component: AddAdminComponent,
        data: { title: 'Add Admin || CUTM' },
      },
      {
        path: 'manage-admin',
        component: ManageAdminComponent,
        data: { title: 'Manage Admin || CUTM' },
      },
      {
        path: 'view-admin',
        component: ViewAdminComponent,
        data: { title: 'View Admin || CUTM' },
      },
      {
        path: 'faculty-manage',
        component: FacultyManagementComponent,
        data: { title: 'Faculty Management || CUTM' },
      },
      {
        path: 'add-faculty',
        component: AddFacultyComponent,
        data: { title: 'Add Faculty || CUTM' },
      },
      {
        path: 'manage-faculty',
        component: ManageFacultyComponent,
        data: { title: 'Manage Faculty || CUTM' },
      },
      {
        path: 'view-faculty',
        component: ViewFacultyComponent,
        data: { title: 'View Faculty || CUTM' },
      },
      {
        path: 'faculty-attendance',
        component: FacultyAttendanceComponent,
        data: { title: 'Faculty Attendance || CUTM' },
      },
      {
        path: 'student-manage',
        component: StudentManagementComponent,
        data: { title: 'Student Management || CUTM' },
      },
      {
        path: 'add-student',
        component: AddStudentComponent,
        data: { title: 'Add Student || CUTM' },
      },
      {
        path: 'manage-student',
        component: ManageStudentComponent,
        data: { title: 'Manage Student || CUTM' },
      },
      {
        path: 'view-student',
        component: ViewStudentComponent,
        data: { title: 'View Student || CUTM' },
      },
      {
        path: 'student-attendance',
        component: ViewStudentComponent,
        data: { title: 'Student Attendance || CUTM' },
      },
      {
        path: 'course-manage',
        component: CourseManagementComponent,
        data: { title: 'Course Management || CUTM' },
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
        data: { title: 'Course Management || CUTM' },
      },
      {
        path: 'manage-course',
        component: ManageCourseComponent,
        data: { title: 'Course Management || CUTM' },
      },
      {
        path: 'view-course',
        component: ViewCourseComponent,
        data: { title: 'Course Management || CUTM' },
      },
      {
        path: 'attendance-manage',
        component: AttendanceTrackingComponent,
        data: { title: 'Attendance Management || CUTM' },
      },
      {
        path: 'timetable-manage',
        component: ScheduleManagementComponent,
        data: { title: 'Schedule Managment || CUTM' },
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
export class AdminRoutingModule {}
