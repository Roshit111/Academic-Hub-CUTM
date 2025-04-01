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
      path: '/faculty/menu',
      fragment: 'menu',
      icon: 'fas fa-home',
    },
    {
      label: 'Course Information',
      path: '/faculty/course',
      fragment: 'course',
      icon: 'fas fa-book',
    },
    {
      label: 'Attendance Management',
      path: '/faculty/attendance',
      fragment: 'attendance',
      icon: 'fas fa-user-check',
    },
    {
      label: 'Time Table',
      path: '/faculty/timetable',
      fragment: 'timetable',
      icon: 'fas fa-calendar-alt',
    },
    {
      label: 'Reports & Analytics',
      path: '/faculty/reports',
      fragment: 'reports',
      icon: 'fas fa-chart-line',
    },
  ];

  getMenuItems(): navigationMenu[] {
    return this.menuItems;
  }
}
