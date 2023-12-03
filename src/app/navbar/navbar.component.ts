// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showModal = false;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.loadUserState();
  }


  logout(): void {
    this.authService.logout();
    this.closeModal();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
