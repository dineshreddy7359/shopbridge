import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userDetails: any;
  isAuthorisedUser: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.verifyUserDetails();
  }

  verifyUserDetails() {
    this.userDetails = localStorage.getItem('userDetails');
    this.isAuthorisedUser = this.userDetails !== null ? true : false;
  }

  userLogout() {
    localStorage.removeItem('userDetails');
    this.router.navigate(['/login']);
  }

  ngDoCheck () {
    this.verifyUserDetails();
  }

}
