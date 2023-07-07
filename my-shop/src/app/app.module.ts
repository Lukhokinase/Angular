import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MenuofGodComponent } from './Components/menuof-god/menuof-god.component';
import { ViewoneComponent } from './Components/viewone/viewone.component';
import { GodcheckoutComponent } from './Components/godcheckout/godcheckout.component';
import { GodcartComponent } from './Components/godcart/godcart.component';
import { NavComponent } from './Components/nav/nav.component';



import { EmptyBagComponent } from './Components/empty-bag/empty-bag.component';
import { CategoryComponent } from './Components/category/category.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './Components/payment/payment.component';
// import { TypesComponent } from './types/types.component';
// import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ClosingPageComponent } from './closing-page/closing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuofGodComponent,
    ViewoneComponent,
    EmptyBagComponent,
    CategoryComponent,
    // ProductListComponent,
    GodcheckoutComponent,
    GodcartComponent,
    NavComponent,
    PaymentComponent,

    // CheckoutComponent,
      LoginComponent,
      RegisterComponent,
      ClosingPageComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
