import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor(private userDetailsService: UserDetailsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    this.userDetailsService.addUserDetails(this.model).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
