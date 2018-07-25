import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {HttpService} from "../http.service";


@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.css']
})
export class ProductsNewComponent implements OnInit {
    title = 'New Product';
    newProduct: Object;
    createErrors: Object;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
      this.resetNewProduct();
  }

  createProduct() {
      console.log('ProductsNewComponent.createProduct');
      let createObservable = this._httpService.createProduct(this.newProduct);
      createObservable.subscribe((data_from_create: any)=>{
          console.log('data_from_create:', data_from_create);
          this.resetNewProduct();
          if (!data_from_create.error) {
              this._router.navigate(['product']);
          }
          else {
              this.createErrors = data_from_create.error
          }
      })
  }

  resetNewProduct(){
      this.newProduct={
          name: '',
          quantity: 0,
          price: 0
      }
  }

}
