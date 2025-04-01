import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../profile.service';
import { SideMenuService } from '../side-menu.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { UserProfile } from '../../Services/model/user-profile.model';
import { HeaderComponent } from '../../Shared/header/header.component';
import { navigationMenu } from '../../Services/model/navigation-item.model';
import { SideNavbarComponent } from '../../Shared/side-navbar/side-navbar.component';
import { ProfileCardComponent } from '../../Shared/profile-card/profile-card.component';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SideNavbarComponent,
    ProfileCardComponent,
  ],
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  readonly navTitle = 'Admin Module';
  readonly navImage = 'assets/Images/favicon.png';

  userProfile!: UserProfile;
  menuItems: navigationMenu[] = [];
  profileMenuItems: navigationMenu[] = [];

  isSidebarExpanded: boolean = false;
  isProfileCardVisible: boolean = false;
  isManualToggle: boolean = false;
  loading: boolean = true;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private userInfoService: UserInfoService,
    private menuItemsService: MenuItemsService,
    private navigationMenuService: SideMenuService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
      return;
    }

    this.userInfoService.getUserProfile().subscribe((profile) => {
      this.userProfile = profile;
    });

    this.profileMenuItems = this.menuItemsService.getProfileMenuItems();
    this.menuItems = this.navigationMenuService.getMenuItems();
  }

  toggleSidebarState(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  onSidebarStateChange(isExpanded: boolean): void {
    this.isSidebarExpanded = isExpanded;
    if (!this.isManualToggle) {
      this.isManualToggle = false;
    }
  }

  onManualToggle(isManual: boolean): void {
    this.isManualToggle = isManual;
    if (isManual) {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    }
  }

  onProfileCardToggle(): void {
    console.log('Toggling profile card visibility');
    this.isProfileCardVisible = !this.isProfileCardVisible;
  }

  confirmLogout(): void {
    if (confirm('Are you sure you want to log out?')) {
      this.onLogout();
    }
  }

  onLogout(): void {
    console.log('Logging out');
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
