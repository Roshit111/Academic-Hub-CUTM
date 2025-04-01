import { Routes } from '@angular/router';
import { authGuard } from './Services/guards/auth.guard';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './landing-page-components/home/home.component';
import { AboutComponent } from './landing-page-components/about/about.component';
import { ContactComponent } from './landing-page-components/contact/contact.component';
import { ServicesComponent } from './landing-page-components/services/services.component';
import { FeaturesComponent } from './landing-page-components/features/features.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Landing Page || CUTM' },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About || CUTM' },
      },
      {
        path: 'features',
        component: FeaturesComponent,
        data: { title: 'Features || CUTM' },
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: { title: 'Services || CUTM' },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'Contact || CUTM' },
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard],
    data: { role: 'admin' },
  },
  {
    path: 'faculty',
    loadChildren: () =>
      import('./faculty/faculty.module').then((m) => m.FacultyModule),
    canActivate: [authGuard],
    data: { role: 'faculty' },
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [authGuard],
    data: { role: 'student' },
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
