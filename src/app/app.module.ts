import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { SignUpComponent } from './pages/authentication/sign-up/sign-up.component';
import { NavbarComponent } from './pages/fixed/navbar/navbar.component';
import { FooterComponent } from './pages/fixed/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PramManagementComponent } from './pages/prams/pram-management/pram-management.component';
import { QueryPramManagementComponent } from './pages/prams/query-pram-management/query-pram-management.component';
import { QueryPramViewComponent } from './pages/prams/query-pram-view/query-pram-view.component';
import { PramViewComponent } from './pages/prams/pram-view/pram-view.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { CustopPipPipe } from './custop-pip.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    PramManagementComponent,
    QueryPramManagementComponent,
    QueryPramViewComponent,
    PramViewComponent,
    HomeComponent,
    CustopPipPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
