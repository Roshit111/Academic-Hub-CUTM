import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { navigationMenu } from '../../Services/model/navigation-item.model';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent {
  
  @Input() isManualToggle: boolean = false;
  @Input() isSidebarExpanded: boolean = false;
  @Input() menuItems: any[] = [];
  @Input() userImage: string = '';
  @Input() navbarHeader: string = '';

  @Output() sidebarStateChange = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.sidebarStateChange.emit(this.isSidebarExpanded);
  }

  onMouseEnter(): void {
    if (!this.isManualToggle) {
      this.isSidebarExpanded = true;
    }
  }

  onMouseLeave(): void {
    if (!this.isManualToggle) {
      this.isSidebarExpanded = false;
    }
  }

  onHeaderToggle(expanded: boolean, manual: boolean): void {
    this.isSidebarExpanded = expanded;
    this.isManualToggle = manual;
  }
}
