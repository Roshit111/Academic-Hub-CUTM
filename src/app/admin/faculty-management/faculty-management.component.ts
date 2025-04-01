import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../Shared/feature-card/feature-card.component';
import { navigationMenu } from '../../Services/model/navigation-item.model';

@Component({
  selector: 'app-faculty-management',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './faculty-management.component.html',
  styleUrl: './faculty-management.component.css',
})
export class FacultyManagementComponent {
  menuItems: navigationMenu[] = [
    {
      label: 'Add Faculty',
      path: '/admin/add-faculty',
      fragment: 'add-faculty',
      icon: 'fas fa-user-plus',
    },
    {
      label: 'Manage Faculty',
      path: '/admin/manage-faculty',
      fragment: 'manage-faculty',
      icon: 'fas fa-user-cog',
    },
    {
      label: 'View Faculty',
      path: '/admin/view-faculty',
      fragment: 'view-faculty',
      icon: 'fas fa-user-tie',
    },
    {
      label: 'View Attendance',
      path: '/admin/faculty-attendance',
      fragment: 'faculty-attendance',
      icon: 'fas fa-clipboard-list',
    },
  ];
}
