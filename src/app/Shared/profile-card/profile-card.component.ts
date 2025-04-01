import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../Services/model/user-profile.model';
import { navigationMenu } from '../../Services/model/navigation-item.model';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  @Input() profile: UserProfile = {
    userName: '',
    course: '',
    semester: '',
    studentId: '',
    institution: '',
  };
  @Input() profileMenuItems: navigationMenu[] = [];
  @Output() closeCard = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  isProfileCardVisible = false;

  constructor(private router: Router) {}

  toggleProfileCard(): void {
    this.isProfileCardVisible = !this.isProfileCardVisible;
    if (!this.isProfileCardVisible) {
      this.closeCard.emit();
    }
  }

  onLogout(): void {
    this.logout.emit();
  }
}
