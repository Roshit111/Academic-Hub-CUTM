import { Component } from '@angular/core';
import { navigationMenu } from '../../Services/model/navigation-item.model';
import { FeatureCardComponent } from '../../Shared/feature-card/feature-card.component';

@Component({
  selector: 'app-admin-management',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './admin-management.component.html',
  styleUrl: './admin-management.component.css',
})
export class AdminManagementComponent {
  menuItems: navigationMenu[] = [
    {
      label: 'Add Admin',
      path: '/admin/add-admin',
      fragment: 'add-admin',
      icon: 'fas fa-user-plus',
    },
    {
      label: 'Manage Admin',
      path: '/admin/manage-admin',
      fragment: 'manage-admin',
      icon: 'fas fa-user-cog',
    },
    {
      label: 'View Admin',
      path: '/admin/view-admin',
      fragment: 'view-admin',
      icon: 'fas fa-address-book',
    },
  ];

  trackByFn(index: number, item: navigationMenu): string {
    return item.path;
  }
}
