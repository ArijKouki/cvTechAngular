import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
constructor(private http: HttpClient) {}
  onSubmit() {
    // Make a request to the authentication endpoint
    const authenticationEndpoint = 'https://apilb.tridevs.net/api/Users/login';
    this.http.post(authenticationEndpoint, this.user).subscribe(
      (response: any) => {
        // Authentication successful
        console.log('Authentication successful!', response);
        // You can redirect the user or perform other actions here
      },
      (error) => {
        // Authentication failed
        console.error('Authentication failed!', error);
        // Handle the error and provide user feedback if needed
      }
    );
  }
}
