import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MenuComponent } from './menu/menu.component';
import { MenuofGodComponent } from './menuof-god/menuof-god.component'
import { ViewoneComponent } from './viewone/viewone.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GodcartComponent } from './godcart/godcart.component';
import { GodcheckoutComponent } from './godcheckout/godcheckout.component';

const routes: Routes = [
  // { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/godmenu', pathMatch: 'full' },
  { path: 'godmenu', component: MenuofGodComponent},
  { path: 'view', component: ViewoneComponent},
  { path: "checkout", component: CheckoutComponent },
  { path: 'godcart', component: GodcartComponent},
  { path: 'godcheck', component: GodcheckoutComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
