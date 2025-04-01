import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserProfile } from '../Services/model/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}

  // private apiUrl = 'http://localhost:3000/api/user-profile'; // Change this to your backend endpoint

  getUserProfile(): Observable<UserProfile> {
    const hardcodedProfile: UserProfile = {
      // return this.http.get<UserProfile>(this.apiUrl);

      userName: 'Yernagula Roshit',
      course: 'B.Tech ECE',
      semester: '6th Sem',
      studentId: '210101130014',
      institution: 'School of Engineering Technology',
    };
    return of(hardcodedProfile); // Return as an Observable
  }
}
