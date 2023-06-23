import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuofGodComponent } from './menuof-god/menuof-god.component';
import { ViewoneComponent } from './viewone/viewone.component';
import { GodcheckoutComponent } from './godcheckout/godcheckout.component';
import { GodcartComponent } from './godcart/godcart.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuofGodComponent,
    ViewoneComponent,
    GodcheckoutComponent,
    GodcartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
