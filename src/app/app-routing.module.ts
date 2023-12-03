import { NgModule } from '@angular/core';
import { RouterModule, Routes ,Route} from '@angular/router';
import {Observable, of} from "rxjs";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

