// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  // Expose un observable pour que les composants puissent s'abonner aux changements de l'utilisateur
  user$: Observable<User | null> = this.userSubject.asObservable();
    users: Users = new Users()
  loadUserState(): void {
    // Charge l'état de l'utilisateur depuis où vous stockez ces informations (localStorage, backend, etc.)
    // Cela peut être fait lors du chargement de l'application.
    
    const storedUser: User | null = this.users ;
    this.userSubject.next(storedUser);
  }

  login(user: User): void {
    // Logique d'authentification ici
    // Une fois authentifié, mettez à jour l'état de l'utilisateur
    this.userSubject.next(user);
  }

  logout(): void {
    // Logique de déconnexion ici
    // Après la déconnexion, mettez à jour l'état de l'utilisateur à null
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    // Vérifiez si l'utilisateur est authentifié
    return !!this.userSubject.value;
  }
}

// Interface pour représenter l'utilisateur
export interface User {
  id: number;
  email: string;
}

export class Users implements User{
 id!: number;
  email!: string;

}
