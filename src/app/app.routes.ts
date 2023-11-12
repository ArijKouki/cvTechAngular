import {CvPageComponent} from "./cv-page/cv-page.component";
import {CvComponent} from "./cv/cv.component";
import { AuthComponent } from "./auth/auth.component";
import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';

const APP_ROUTING: Routes = [
  { path: 'cv/:id', component: CvPageComponent },
  { path: '', component: CvComponent },
  { path: 'cv', component: CvComponent },
  { path: 'auth' , component: AuthComponent}
]

export const ROUTING =RouterModule.forRoot(APP_ROUTING);