import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  userDetails: any = [];
  
  constructor(private userDetailsService: UserDetailsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let userFilteredDataList;
    this.userDetailsService.getUserDetails().subscribe((userData) => {
      this.userDetails = userData;
      userFilteredDataList = this.userDetails.filter((x: any) => x.userDetails.username == this.model.username);
      localStorage.setItem('userDetails', userFilteredDataList?.length>0 ? JSON.stringify(userFilteredDataList[0].userDetails) : '');
      if (userFilteredDataList?.length > 0) {
        this.router.navigate(['/shop']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
