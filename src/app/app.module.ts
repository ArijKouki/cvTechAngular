import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/components/cvComp/cv.component';
import { CvDetailComponent } from './cv/components/cv-detail/cv-detail.component';
import { CvListComponent } from './cv/components/cv-list/cv-list.component';
import { CvItemComponent } from './cv/components/cv-item/cv-item.component';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { EmbaucheComponent } from './cv/components/embauche/embauche.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { CvPageComponent } from './cv/components/cv-page/cv-page.component';
import {ROUTING} from "./app.routes";
import { AuthComponent } from './auth/components/authComp/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './cv/components/navbar/navbar.component';
import { AuthService } from './auth/services/auth.service';
import { AutocompleteComponent } from './cv/components/autocomplete/autocomplete.component';
import { MergeScanReduceComponent } from './cv/components/merge-scan-reduce/merge-scan-reduce.component';
import { ProductsComponent } from './cv/components/products/products.component';
import {CvResolver} from "./cv/resolvers/cv.resolver";
import { MasterDetailComponent } from './cv/components/master-detail/master-detail.component';
import { AddCvComponent } from './cv/components/add-cv/add-cv.component';
import {CanDeactivateGuard} from "./cv/guards/CanDeactivateGuard";
import {AuthInterceptor} from "./auth/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvDetailComponent,
    CvListComponent,
    CvItemComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    CvPageComponent,
    AuthComponent,
    NavbarComponent,
    AutocompleteComponent,
    MergeScanReduceComponent,
    ProductsComponent,
    MasterDetailComponent,
    AddCvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ROUTING,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    provideClientHydration(),
    CvResolver,
    CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
