import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// services
import { InterceptorService } from './services/interceptor.service';
import { PhotosService } from './services/photos.service';
import { HeroComponent } from './components/hero/hero.component';
import { UserPhotosComponent } from './components/user-photos/user-photos.component';
import { AppRoutingModule } from './/app-routing.module';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    UserPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders,
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
