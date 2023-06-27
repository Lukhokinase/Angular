import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuofGodComponent } from './menuof-god/menuof-god.component';
import { ViewoneComponent } from './viewone/viewone.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { LoginComponent } from './login/login.component';
import { FormGroupComponent } from './form-group/form-group.component';
// import { RegisterformGroupComponent } from './registerform-group/registerform-group.component';
import { SharedserviceComponent } from './sharedservice/sharedservice.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuofGodComponent,
    ViewoneComponent,
    CheckoutComponent,
    RegisterComponent,
    HomeComponent,
    DeshboardComponent,
    LoginComponent,
    FormGroupComponent,
    // RegisterformGroupComponent,
    SharedserviceComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
