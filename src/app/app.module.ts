import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AuthorizationCheck } from './shared/AuthorizeCheck/AuthorizeCheck';
import { ErrorInterceptor } from './shared/HttpInterceptor/errorInterceptor';
import { httpInterceptor } from './shared/HttpInterceptor/httpInterceptor';
import { AuthorizedService } from './shared/Services/Authorized/authorized.service';
import { LoginService } from './shared/Services/Login/login.service';
import { RegisterService } from './shared/Services/Register/register.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent],
    
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthorizationCheck, LoginService, RegisterService, AuthorizedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
