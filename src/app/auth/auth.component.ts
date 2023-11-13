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

    const authenticationEndpoint = 'https://apilb.tridevs.net/api/Users/login';
    this.http.post(authenticationEndpoint, this.user).subscribe(
      (response: any) => {

        console.log('Authentication successful!', response);


        this.authService.login({
          id: response.userId,
          email: this.user.email,
        });

        this.router.navigate(['/']);

      },
      (error) => {
        console.error('Authentication failed!', error);
      }
    );

  }
}
