import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  readonly ImageURL: string = 'assets/logo.png';
  BrowserName: string = 'Login CUTM Academic Hub';

  userId: string = '';
  password: string = '';
  showPassword: boolean = false;

  login() {
    if (!this.userId || !this.password) {
      alert("Please enter both User ID and Password.");
      return;
    }
    console.log("User:", this.userId, "Password:", this.password);
  }

  closeModal() {
    this.close.emit();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
