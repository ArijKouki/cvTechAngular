import {CvPageComponent} from "./cv-page/cv-page.component";
import {CvComponent} from "./cv/cv.component";
import { AuthComponent } from "./auth/auth.component";
import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import {MergeScanReduceComponent} from "./merge-scan-reduce/merge-scan-reduce.component";
import {ProductsComponent} from "./products/products.component";
import { CvResolver } from './resolvers/cv.resolver';
import {CvPageResolver} from "./resolvers/cv-page.resolver";
import {MasterDetailComponent} from "./master-detail/master-detail.component";
import {AddCvComponent} from "./add-cv/add-cv.component";
import {CanDeactivateGuard} from "./guards/CanDeactivateGuard";

const APP_ROUTING: Routes = [
  { path: 'cv/:id',
    component: CvPageComponent,
    resolve: { personne: CvPageResolver }
  },
  { path: 'cv',
    component: CvComponent,
    resolve: {personnes: CvResolver}
  },
  { path: 'auth' , component: AuthComponent},
  { path: 'products' , component: ProductsComponent},
  { path: 'msr' , component: MergeScanReduceComponent},

  { path: 'list' ,
    component: MasterDetailComponent,
    resolve: {personnes: CvResolver},
    children:[
        { path: ':id' ,
          component: CvPageComponent,
          resolve: {personne: CvPageResolver}
        },
    ]
  },
  { path: 'add',
    component: AddCvComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: '',
    component: CvComponent,
    resolve: {personnes: CvResolver}
  }
]

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
