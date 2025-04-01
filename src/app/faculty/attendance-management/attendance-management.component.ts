import { Component } from '@angular/core';
import { navigationMenu } from '../../Services/model/navigation-item.model';
import { FeatureCardComponent } from '../../Shared/feature-card/feature-card.component';

@Component({
  selector: 'app-attendance-management',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './attendance-management.component.html',
  styleUrl: './attendance-management.component.css',
})
export class AttendanceManagementComponent {
  menuItems: navigationMenu[] = [
    {
      label: 'Take Attendance',
      path: '/faculty/take-attendance',
      fragment: 'take-attendance',
      icon: 'fas fa-user-plus',
    },
    {
      label: 'View Attendance',
      path: '/faculty/view-attendance',
      fragment: 'view-attendance',
      icon: 'fas fa-user-cog',
    },
  ];

  trackByFn(index: number, item: navigationMenu): string {
    return item.path;
  }
}
