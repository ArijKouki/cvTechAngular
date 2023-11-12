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
    // Make a request to the authentication endpoint
    const authenticationEndpoint = 'https://apilb.tridevs.net/api/Users/login';
    this.http.post(authenticationEndpoint, this.user).subscribe(
      (response: any) => {
        // Authentication successful
        console.log('Authentication successful!', response);

        // Update the state of the authenticated user in AuthService
        this.authService.login({
          id: response.userId, // Assuming the API response has userId
          email: this.user.email,
        });

        // Redirect to home or any other page after successful login
        this.router.navigate(['/']);

      },
      (error) => {
        // Authentication failed
        console.error('Authentication failed!', error);
        // Display a toast notification for authentication failure
      }
    );
  
  }
}
