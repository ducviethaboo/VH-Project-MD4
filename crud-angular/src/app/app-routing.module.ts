
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: CreateProductComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'update/:id', component: UpdateProductComponent },
  { path: 'search/:key', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }