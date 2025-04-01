import { Injectable } from '@angular/core';
import { navigationMenu } from '../Services/model/navigation-item.model';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  constructor() {}

  private menuItems: navigationMenu[] = [
    {
      label: 'Home',
      path: '/admin/menu',
      fragment: 'menu',
      icon: 'fas fa-home',
    },
    {
      label: 'Admin Management',
      path: '/admin/admin-manage',
      fragment: 'admin-manage',
      icon: 'fas fa-user-shield',
    },
    {
      label: 'Faculty Management',
      path: '/admin/faculty-manage',
      fragment: 'faculty-manage',
      icon: 'fas fa-chalkboard-teacher',
    },
    {
      label: 'Student Management',
      path: '/admin/student-manage',
      fragment: 'student-manage',
      icon: 'fas fa-user-graduate',
    },
    {
      label: 'Course Management',
      path: '/admin/course-manage',
      fragment: 'course-manage',
      icon: 'fas fa-book',
    },
    {
      label: 'Schedule Management',
      path: '/admin/timetable-manage',
      fragment: 'timetable-manage',
      icon: 'fas fa-calendar-alt',
    },
    {
      label: 'Report & Analytics',
      path: '/admin/reports',
      fragment: 'reports',
      icon: 'fas fa-chart-line',
    },
  ];

  getMenuItems(): navigationMenu[] {
    return this.menuItems;
  }
}
