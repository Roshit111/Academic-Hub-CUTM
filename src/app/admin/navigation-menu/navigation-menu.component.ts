import { Component, OnInit } from '@angular/core';
import { navigationMenu } from '../../Services/model/navigation-item.model';
import { FeatureCardComponent } from '../../Shared/feature-card/feature-card.component';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
})
export class NavigationMenuComponent implements OnInit {
  menuItems: navigationMenu[] = [];

  constructor(
    private router: Router,
    private navigationMenuService: MenuService
  ) {}

  ngOnInit(): void {
    this.menuItems = this.navigationMenuService.getMenuItems();
  }
}
