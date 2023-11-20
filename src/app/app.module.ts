import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CvPageComponent } from './cv-page/cv-page.component';
import {ROUTING} from "./app.routes";
import { AuthComponent } from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MergeScanReduceComponent } from './merge-scan-reduce/merge-scan-reduce.component';
import { ProductsComponent } from './products/products.component';
import {CvResolver} from "./resolvers/cv.resolver";
import { MasterDetailComponent } from './master-detail/master-detail.component';

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
    MasterDetailComponent
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
    CvResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
