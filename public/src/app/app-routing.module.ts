import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductsDetailsComponent} from "./products-details/products-details.component";
import {ProductsEditComponent} from "./products-edit/products-edit.component";
import {ProductsNewComponent} from "./products-new/products-new.component";
import {ProductsDeleteComponent} from "./products-delete/products-delete.component";

const routes: Routes = [
  // {path: ' ', component: ProductsListComponent},
  {path: 'product/new', component: ProductsNewComponent},
  {path: 'product', component: ProductsListComponent},
  {path: 'product/:id', component: ProductsDetailsComponent},
  {path: 'product/:id/edit', component: ProductsEditComponent},
  {path: 'product/:id/delete', component: ProductsDeleteComponent},


  // { path: 'product', component: ProductsComponent, children: [
  // nested route
  // { path: 'edit/:id', component: ProductsEditComponent },
  // ]},
  // { path: 'product/new', component: ProductsNewComponent },
  {path: '', pathMatch: 'full', component:ProductsListComponent}, // redirects empty url to app home
  {path: '**', redirectTo: '/'}, // redirects any mistyped url to the app home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
