import { Injectable } from '@angular/core';
import { navigationMenu } from '../Services/model/navigation-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  constructor() {}

  profileMenuItems: navigationMenu[] = [
    {
      label: 'Profile',
      path: '/student/profile',
      fragment: 'profile',
      icon: 'fas fa-user',
    },
    {
      label: 'Change Password',
      path: '/student/reset',
      fragment: 'reset',
      icon: 'fas fa-cogs',
    },
  ];

  getProfileMenuItems(): navigationMenu[] {
    return this.profileMenuItems;
  }
}
