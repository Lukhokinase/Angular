import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
<<<<<<< HEAD
import { EmptyBagComponent } from './empty-bag/empty-bag.component';
=======
import { YourBagComponent } from './your-bag/your-bag.component';
import { CheckoutComponent } from './checkout/checkout.component';

>>>>>>> 60e020206409cc35476667e6fff9cca17d3c7232

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
<<<<<<< HEAD
    EmptyBagComponent
=======
    YourBagComponent,
    CheckoutComponent
>>>>>>> 60e020206409cc35476667e6fff9cca17d3c7232
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
