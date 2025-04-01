import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly logo = 'assets/Images/logo.png';
  
  isManualToggle = false;
  isProfileCardVisible = false;

  @Input() isSidebarExpanded: boolean = false;
  @Output() sidebarStateChange = new EventEmitter<boolean>();
  @Output() profileCardToggle = new EventEmitter<boolean>();
  @Output() manualToggle = new EventEmitter<boolean>();


  toggleProfileCard() {
    this.isProfileCardVisible = !this.isProfileCardVisible;
    this.profileCardToggle.emit(this.isProfileCardVisible);
  }

  toggleSidebarState() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.isManualToggle = !this.isManualToggle;
    this.manualToggle.emit(this.isManualToggle);
    this.sidebarStateChange.emit(this.isSidebarExpanded);
  }
}

// Session Not required for this Component