import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './session/login/login.component';
import { ShowIfLoggedInDirective } from './session/show-if-logged-in.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    ShowIfLoggedInDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
