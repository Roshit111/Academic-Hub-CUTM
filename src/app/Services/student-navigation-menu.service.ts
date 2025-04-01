import { Injectable } from '@angular/core';
import { navigationMenu } from './model/navigation-item.model';

@Injectable({
  providedIn: 'root',
})
export class NavigationMenuService {
  constructor() {}

  private menuItems: navigationMenu[] = [
    { label: 'Home', path: '/home', fragment: 'home', icon: 'fas fa-home' },
    { label: 'Attendance', path: '/home', fragment: 'home', icon: 'fas fa-home' },
    { label: 'Time Table', path: '/home', fragment: 'home', icon: 'fas fa-home' },
  ];

  getMenuItems(): navigationMenu[] {
    return this.menuItems;
  }
}
