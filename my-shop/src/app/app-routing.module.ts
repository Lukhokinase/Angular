import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './Components/category/category.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './Components/payment/payment.component';


import { MenuofGodComponent } from './Components/menuof-god/menuof-god.component'
import { ViewoneComponent } from './Components/viewone/viewone.component';
// import { CheckoutComponent } from './checkout/checkout.component';
import { GodcartComponent } from './Components/godcart/godcart.component';
import { GodcheckoutComponent } from './Components/godcheckout/godcheckout.component';


import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [

  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuofGodComponent},
  { path: 'view/:id', component: ViewoneComponent},
  // { path: "Checkout", component: CheckoutComponent },
  { path: 'Cart', component: GodcartComponent},
  { path: 'Checkout', component: GodcheckoutComponent},

  { path: 'category', component: CategoryComponent},
  // { path: 'products', component: ProductListComponent},
  { path: 'Payment', component: PaymentComponent},
  {path: 'login', component:LoginComponent},
  { path:'register',component:RegisterComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
