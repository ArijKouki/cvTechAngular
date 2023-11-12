import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { DefaultImagePipe } from './default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CvPageComponent } from './cv-page/cv-page.component';
import {ROUTING} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvDetailComponent,
    CvListComponent,
    CvItemComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    CvPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
