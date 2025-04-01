import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

interface NavLink {
  path: string;
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly logoURL = 'assets/Images/logo.png';
  readonly imageURL = 'assets/Images/favicon.png';
  readonly titleName = 'CUTM || Attendance System';

  readonly navLinks: NavLink[] = [
    { path: '/home', label: 'Home', fragment: 'home' },
    { path: '/about', label: 'About', fragment: 'about' },
    { path: '/features', label: 'Features', fragment: 'features' },
    { path: '/services', label: 'Services', fragment: 'services' },
    { path: '/contact', label: 'Contact Us', fragment: 'contact' },
  ];

  isMobileMenuOpen = false;
  isLoginModalVisible = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  openLoginModal(): void {
    this.closeMobileMenu();
    this.isLoginModalVisible = true;
  }

  closeLoginModal(): void {
    this.isLoginModalVisible = false;
  }

  trackByFn(index: number, item: NavLink): string {
    return item.path;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event): void {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.querySelector('.navbar-toggler');

    if (
      mobileMenu &&
      toggleButton &&
      !mobileMenu.contains(event.target as Node) &&
      !toggleButton.contains(event.target as Node)
    ) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:keydown.escape')
  handleEscapePress(): void {
    this.closeMobileMenu();
  }
}
