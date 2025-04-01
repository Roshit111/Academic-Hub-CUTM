import { Injectable } from '@angular/core';
import { navigationMenu } from '../Services/model/navigation-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  private menuItems: navigationMenu[] = [
    {
      label: 'Course Information',
      path: '/student/course',
      fragment: 'course',
      icon: 'fas fa-book',
    },
    {
      label: 'My Attendance',
      path: '/student/attendance',
      fragment: 'attendance',
      icon: 'fas fa-user-check',
    },
    {
      label: 'Time Table',
      path: '/student/timetable',
      fragment: 'timetable',
      icon: 'fas fa-calendar-alt',
    },
  ];

  getMenuItems(): navigationMenu[] {
    return this.menuItems;
  }
}
