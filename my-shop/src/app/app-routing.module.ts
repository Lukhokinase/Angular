import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MenuComponent } from './menu/menu.component';
import { MenuofGodComponent } from './menuof-god/menuof-god.component'
import { ViewoneComponent } from './viewone/viewone.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  // { path: 'menu', component: MenuComponent },
  { path: 'godmenu', component: MenuofGodComponent},
  { path: 'view', component: ViewoneComponent},
  { path: "checkout", component: CheckoutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
