import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  projectName: string = 'Smart Attendance System';

  guideName: string = 'Prof. Mr. Debendra Maharana';
  developerDetails = [
    {
      name: 'Yernagula Roshit',
      url: 'https://www.linkedin.com/in/yernagula-roshit',
    },
    {
      name: 'Palavalasa Manikanta Varaprasad',
      url: 'https://www.linkedin.com/in/palavalasa-manikanta-varaprasad-0b430a2a3/',
    },
  ];

  isLastDeveloper(developer: any): boolean {
    return (
      this.developerDetails.indexOf(developer) ===
      this.developerDetails.length - 1
    );
  }
}
