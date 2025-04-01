import { Injectable } from '@angular/core';
import { navigationMenu } from './model/navigation-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  constructor() {}

  profileMenuItems: navigationMenu[] = [
    {
      label: 'Profile',
      path: '/admin/demo',
      fragment: 'demo',
      icon: 'fas fa-user',
    },
    {
      label: 'Change Password',
      path: '/dashboard',
      fragment: 'change-password',
      icon: 'fas fa-cogs',
    },
  ];

  getProfileMenuItems(): navigationMenu[] {
    return this.profileMenuItems;
  }
}
