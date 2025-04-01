import { Component } from '@angular/core';
import { navigationMenu } from '../../Services/model/navigation-item.model';
import { FeatureCardComponent } from '../../Shared/feature-card/feature-card.component';

@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './course-management.component.html',
  styleUrl: './course-management.component.css',
})
export class CourseManagementComponent {
  menuItems: navigationMenu[] = [
    {
      label: 'Add Course',
      path: '/admin/add-course',
      fragment: 'menu',
      icon: 'fas fa-plus-circle',
    },
    {
      label: 'Manage Course',
      path: '/admin/manage-course',
      fragment: 'admin-manage',
      icon: 'fas fa-edit',
    },
    {
      label: 'View Course',
      path: '/admin/view-course',
      fragment: 'faculty-manage',
      icon: 'fas fa-book-open',
    },
  ];
}
