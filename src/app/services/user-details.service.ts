import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDetailsUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  getUserDetails() {
    return this.http.get(userDetailsUrl);
  }

  addUserDetails(userDetails: any) {
    return this.http.post(userDetailsUrl, {userDetails});
  }

}
