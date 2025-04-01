import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() formSubmitted = new EventEmitter<{
    mode: 'login' | 'forgot';
    userId: string;
    password?: string;
  }>();

  readonly imageUrl: string = 'assets/Images/logo.png';
  mode: 'login' | 'forgot' = 'login';
  userId: string = '';
  password: string = '';
  validationError: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService
  ) {}

  private navigateToDashboard(role: string) {
    const roleToRouteMap: { [key: string]: string } = {
      admin: '/admin',
      faculty: '/faculty',
      student: '/student',
    };
    const targetRoute = roleToRouteMap[role] || '/login';
    this.router.navigate([targetRoute]);
  }

  submitForm() {
    if (this.mode === 'login' && (!this.userId || !this.password)) {
      this.displayValidationError('Please enter User ID and Password.');
      return;
    }

    if (this.mode === 'forgot' && !this.userId) {
      this.displayValidationError('Please enter User ID.');
      return;
    }

    if (this.mode === 'login') {
      const loginSuccess = this.authService.login(this.userId, this.password);

      if (loginSuccess) {
        const role = this.authService.currentUserRole;
        this.navigateToDashboard(role);
      } else {
        this.displayValidationError('Invalid credentials. Please try again.');
      }
    }
  }

  private displayValidationError(message: string) {
    this.validationError = message;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.validationError = '';
      this.cdr.detectChanges();
    }, 2000);
  }

  switchMode(newMode: 'login' | 'forgot') {
    this.mode = newMode;
    this.validationError = '';
  }

  onClose() {
    if (this.isVisible) {
      this.isVisible = false;
      this.close.emit();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitForm();
    }
  }
}
