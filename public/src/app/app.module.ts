import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import these and put them in the imports array below
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// The App Component from the aqp.component.ts file
import { AppComponent } from './app.component';

// This is a service created to manage http requests (get, post)
//ng generate service http //ng g s http
import {HttpService} from "./http.service";

// ngx-bootstrap https://www.npmjs.com/package/ngx-bootstrap

// Allows the ability to route in Angular

import { AppRoutingModule } from './app-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsNewComponent,
    ProductsEditComponent,
    ProductsDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
