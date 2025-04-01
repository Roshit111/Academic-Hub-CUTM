import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransitionService } from './Services/transition.service';
import { TitleAnimateService } from './Services/title-animate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private titleAnimateService: TitleAnimateService,
    private transitionService: TransitionService
  ) {}

  ngOnInit(): void {
    this.transitionService.init();
    this.titleAnimateService.init();
  }
}
