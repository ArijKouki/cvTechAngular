import {CvPageComponent} from "./cv-page/cv-page.component";
import {CvComponent} from "./cv/cv.component";
import {RouterModule, Routes} from "@angular/router";

const APP_ROUTING: Routes = [
  { path: 'cv/:id', component: CvPageComponent },
  { path: '', component: CvComponent },
  { path: 'cv', component: CvComponent },
]

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
