import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly ImageURL: string = 'assets/logo.png';

  navLinks = [
    { path: '/home', label: 'Home', fragment: 'home' },
    { path: '/about', label: 'About', fragment: 'about' },
    { path: '/features', label: 'Features', fragment: 'features' },
    { path: '/services', label: 'Services', fragment: 'services' },
    { path: '/contact', label: 'Contact Us', fragment: 'contact' }
  ];

  isMenuOpen = false;
  isLoginVisible = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  login(): void {
    this.isLoginVisible = true;
  }

  closeLoginModal(): void {
    this.isLoginVisible = false;
  }

  // Close sidebar when clicking outside, but allow clicks inside the menu
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const sidebar = document.getElementById('mobileMenu');
    const toggleButton = document.querySelector('.navbar-toggler');

    if (
      sidebar &&
      !sidebar.contains(event.target as Node) &&
      toggleButton &&
      !toggleButton.contains(event.target as Node)
    ) {
      this.closeMenu();
    }
  }
}
