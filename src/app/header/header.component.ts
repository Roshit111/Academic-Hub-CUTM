import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ImageURL = '/assets/logo.png';

  Links = [
    { URL: "https://www.cutm.ac.in", Name: "Home" },
    { URL: "https://www.cutm.ac.in", Name: "About" },
    { URL: "https://www.cutm.ac.in", Name: "Features" },
    { URL: "https://www.cutm.ac.in", Name: "Services" },
    { URL: "https://www.cutm.ac.in", Name: "Contact" },
  ];
}
