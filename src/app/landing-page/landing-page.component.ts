import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { HomeComponent } from '../landing-page-components/home/home.component';
import { AboutComponent } from '../landing-page-components/about/about.component';
import { HeaderComponent } from '../landing-page-components/header/header.component';
import { FooterComponent } from '../landing-page-components/footer/footer.component';
import { ContactComponent } from '../landing-page-components/contact/contact.component';
import { ServicesComponent } from '../landing-page-components/services/services.component';
import { FeaturesComponent } from '../landing-page-components/features/features.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FeaturesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          const yOffset = -100;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  }
}
