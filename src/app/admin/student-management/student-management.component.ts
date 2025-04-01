import { Component } from '@angular/core';
import { navigationMenu } from '../../Services/model/navigation-item.model';
import { FeatureCardComponent } from '../../Shared/feature-card/feature-card.component';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css',
})
export class StudentManagementComponent {
  menuItems: navigationMenu[] = [
    {
      label: 'Add Student',
      path: '/admin/add-student',
      fragment: 'add-student',
      icon: 'fas fa-user-plus',
    },
    {
      label: 'Manage Student',
      path: '/admin/manage-student',
      fragment: 'manage-student',
      icon: 'fas fa-users-cog',
    },
    {
      label: 'View Student',
      path: '/admin/view-student',
      fragment: 'view-student',
      icon: 'fas fa-user-graduate',
    },
    {
      label: 'View Attendance',
      path: '/admin/student-attendance',
      fragment: 'student-attendance',
      icon: 'fas fa-calendar-check',
    },
  ];
}
