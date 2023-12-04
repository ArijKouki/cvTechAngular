import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: BehaviorSubject<User | null>;
  user$: Observable<User | null>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient) {
    const storedToken = isPlatformBrowser(this.platformId) ? localStorage.getItem('currentUser') : null;
    this.tokenSubject = new BehaviorSubject<User | null>(storedToken ? { id: storedToken} : null);
    this.user$ = this.tokenSubject.asObservable();
  }

  private getStoredUser(): User | null {
    try {
      if (isPlatformBrowser(this.platformId)) {
        const storedToken = localStorage.getItem('currentUser');
        return storedToken ? { id: storedToken}  : null;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving user from localStorage:', error);
      return null;
    }
  }

  loadUserState(): void {
    const storedUser = this.getStoredUser();
    this.tokenSubject.next(storedUser);
  }


  login(email: string, password: string): Observable<any> {
    const authenticationEndpoint = 'https://apilb.tridevs.net/api/Users/login';

    return this.http.post<User>(authenticationEndpoint, { email, password }).pipe(
      tap((response) => {
        if (isPlatformBrowser(this.platformId)) {
          try {
            console.log(response)
            localStorage.setItem('currentUser', response.id.toString());
            const user: User = {
              id: response.id
            };
            this.tokenSubject.next(user);
          } catch (error) {
            console.error('Error saving user to localStorage:', error);
          }
        }
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.removeItem('currentUser');
        this.tokenSubject.next(null);
      } catch (error) {
        console.error('Error removing user from localStorage:', error);
      }
    }
  }

  /*isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user)
    );
  }*/
  getToken(): string | null {
    const storedUser = this.getStoredUser();
    return storedUser ? storedUser.id : null;
  }

}

export interface User {
  id: string;
}

