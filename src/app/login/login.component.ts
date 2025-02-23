import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnChanges {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  readonly ImageURL: string = 'assets/logo.png';
  BrowserName: string = 'Login CUTM Academic Hub';
  userId: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']?.currentValue) {
      setTimeout(() => document.getElementById('userId')?.focus(), 100);
    }
  }

  login() {
    if (!this.userId || !this.password) {
      this.errorMessage = 'Please enter both User ID and Password.';
      return;
    }
    this.errorMessage = '';
    console.log("User:", this.userId, "Password:", this.password);
  }

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress(event: KeyboardEvent) {
    if (this.isVisible) this.closeModal();
  }
}