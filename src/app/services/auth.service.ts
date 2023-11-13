import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  user$: Observable<User | null> = this.userSubject.asObservable();
  user: Users|null = new Users()
  loadUserState(): void {

    this.userSubject.next(this.user);
  }

  login(user: User): void {
    this.userSubject.next(user);
  }

  logout(): void {
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }
}

export interface User {
  id: number;
  email: string;
}

export class Users implements User{
 id!: number;
  email!: string;

}
