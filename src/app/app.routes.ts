import {CvPageComponent} from "./cv-page/cv-page.component";
import {CvComponent} from "./cv/cv.component";
import { AuthComponent } from "./auth/auth.component";
import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import {MergeScanReduceComponent} from "./merge-scan-reduce/merge-scan-reduce.component";
import {ProductsComponent} from "./products/products.component";

const APP_ROUTING: Routes = [
  { path: 'cv/:id', component: CvPageComponent },
  { path: 'cv', component: CvComponent },
  { path: 'auth' , component: AuthComponent},
  { path: 'products' , component: ProductsComponent},
  { path: 'msr' , component: MergeScanReduceComponent},
  { path: '', component: CvComponent }
]

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
