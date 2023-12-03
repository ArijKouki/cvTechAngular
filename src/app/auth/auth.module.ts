import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./components/authComp/auth.component";
import {RouterModule, Routes} from "@angular/router";


const authRoutes: Routes = [
  { path: '', component: AuthComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
