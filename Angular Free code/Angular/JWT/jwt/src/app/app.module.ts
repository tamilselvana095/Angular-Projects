import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import { NaveBareComponent } from './comp/nave-bare/nave-bare.component';
import { LoginComponent } from './comp/login/login.component';

import { ContactUsComponent } from './comp/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {   HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GetComponent } from './comp/get/get.component';
import { CustomInterceptor } from './custom.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NaveBareComponent,
    LoginComponent,
    ContactUsComponent,
    ContactUsComponent,
    GetComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
    useClass : CustomInterceptor,
    multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
