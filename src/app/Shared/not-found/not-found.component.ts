import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
  readonly imageUrl = './assets/Images/404.png';

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
