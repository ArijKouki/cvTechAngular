import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  user = {
    email: '',
    password: '',
  };
constructor(
  private http: HttpClient,
  private authService: AuthService,
  private router: Router
    ) {}
  onSubmit() {
  this.authService.login(this.user.email,this.user.password).subscribe(
    (response: any) => {
      console.log('Authentication successful!', response);
      this.router.navigate(['/']);
    },
    (error) => {
      console.error('Authentication failed!', error);
    }
  );
  }

}
