import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUser: any = null;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadUserData();
  }

  private loadUserData(): void {
    if (this.isBrowser) {
      const sessionData = sessionStorage.getItem('currentUser');
      if (sessionData) {
        this.currentUser = JSON.parse(sessionData);
        this.isAuthenticatedSubject.next(true);
      }
    }
  }

  login(username: string, password: string): boolean {
    const users = [
      { username: 'admin', password: 'admin@123', role: 'admin' },
      { username: 'faculty', password: 'faculty@123', role: 'faculty' },
      { username: 'student', password: 'student@123', role: 'student' },
    ];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.currentUser = user;

      if (this.isBrowser) {
        sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      }

      this.isAuthenticatedSubject.next(true);
      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null;
    if (this.isBrowser) {
      sessionStorage.removeItem('currentUser');
    }
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }
  
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  get currentUserRole() {
    return this.currentUser?.role;
  }

  get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }
}
