import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly logoURL = 'assets/logo.png';
  readonly imageURL = 'assets/favicon.png';
  readonly titleName = 'CUTM || Academic Hub';

  readonly navLinks = [
    { path: '/home', label: 'Home', fragment: 'home' },
    { path: '/about', label: 'About', fragment: 'about' },
    { path: '/features', label: 'Features', fragment: 'features' },
    { path: '/services', label: 'Services', fragment: 'services' },
    { path: '/contact', label: 'Contact Us', fragment: 'contact' }
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

  trackByFn(index: number, item: any): string {
    return item.path;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event): void {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleButton = document.querySelector('.navbar-toggler');

    if (
      mobileMenu && toggleButton &&
      !mobileMenu.contains(event.target as Node) &&
      !toggleButton.contains(event.target as Node)
    ) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapePress(): void {
    this.closeMobileMenu();
  }
}