import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  readonly imageUrl: string = 'assets/logo.png';
  mode: 'login' | 'forgot' = 'login';
  userId: string = '';
  password: string = '';
  validationError: string = '';

  constructor(private cdr: ChangeDetectorRef) { }

  submitForm() {
    if (this.mode === 'login' && (!this.userId || !this.password)) {
      this.validationError = 'Please enter User ID and Password.';
    } else if (this.mode === 'forgot' && !this.userId) {
      this.validationError = 'Please enter User ID.';
    } else {
      this.validationError = '';
      console.log(`${this.mode === 'login' ? 'Logging in' : 'Resetting password'} for User:`, this.userId);
    }
    this.cdr.detectChanges();

    if (this.validationError) {
      setTimeout(() => {
        this.validationError = '';
        this.cdr.detectChanges();
      }, 1000);
    }
  }

  switchMode(newMode: 'login' | 'forgot') {
    this.mode = newMode;
    this.validationError = '';
    this.cdr.detectChanges();
  }

  onClose() {
    if (this.isVisible) {
      this.isVisible = false;
      this.close.emit();
      this.cdr.detectChanges();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress() {
    this.onClose();
  }
}