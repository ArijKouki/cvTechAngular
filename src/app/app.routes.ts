import {CvPageComponent} from "./cv/components/cv-page/cv-page.component";
import {CvComponent} from "./cv/components/cvComp/cv.component";
import { AuthComponent } from "./auth/components/authComp/auth.component";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';
import {MergeScanReduceComponent} from "./cv/components/merge-scan-reduce/merge-scan-reduce.component";
import {ProductsComponent} from "./cv/components/products/products.component";
import { CvResolver } from './cv/resolvers/cv.resolver';
import {CvPageResolver} from "./cv/resolvers/cv-page.resolver";
import {MasterDetailComponent} from "./cv/components/master-detail/master-detail.component";
import {AddCvComponent} from "./cv/components/add-cv/add-cv.component";
import {CanDeactivateGuard} from "./cv/guards/CanDeactivateGuard";

const APP_ROUTING: Routes = [
  { path: 'cv/:id',
    component: CvPageComponent,
    resolve: { personne: CvPageResolver }
  },
  { path: 'cv',
    component: CvComponent,
    resolve: {personnes: CvResolver}
  },
  //{ path: 'auth' , component: AuthComponent},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
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

export const ROUTING =RouterModule.forRoot(APP_ROUTING,
  {
    preloadingStrategy: PreloadAllModules,
  });
