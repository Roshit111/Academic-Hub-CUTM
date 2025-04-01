import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemsService } from '../profile.service';
import { SideMenuService } from '../side-menu.service';
import { UserInfoService } from '../user-info.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { UserProfile } from '../../Services/model/user-profile.model';
import { HeaderComponent } from '../../Shared/header/header.component';
import { navigationMenu } from '../../Services/model/navigation-item.model';
import { SideNavbarComponent } from '../../Shared/side-navbar/side-navbar.component';
import { ProfileCardComponent } from '../../Shared/profile-card/profile-card.component';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SideNavbarComponent,
    ProfileCardComponent,
  ],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css',
})
export class StudentPageComponent {
  readonly navTitle = 'Student Module';
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
    private authService: AuthService,
    private userInfoService: UserInfoService,
    private menuItemsService: MenuItemsService,
    private navigationMenuService: SideMenuService
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
    this.isProfileCardVisible = !this.isProfileCardVisible;
  }

  confirmLogout(): void {
    if (confirm('Are you sure you want to log out?')) {
      this.onLogout();
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
