import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { bagComponent } from './bag/bag.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'bag', component: bagComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'products', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
