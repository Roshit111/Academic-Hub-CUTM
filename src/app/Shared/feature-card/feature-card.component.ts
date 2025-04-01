import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navigationMenu } from '../../Services/model/navigation-item.model';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'],
})
export class FeatureCardComponent {
  @Input() featureCard: navigationMenu[] = [];
}
