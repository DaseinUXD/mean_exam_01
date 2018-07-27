import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params, Router } from "@angular/router";
import {HttpService} from "../http.service";

@Component({
    selector: 'app-products-edit',
    templateUrl: './products-edit.component.html',
    styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
    title = 'Update Product';
    productEdit: Object;
    createErrors: Object;

    constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
        console.log('ProductEditComponent.constructor');
    }

    ngOnInit() {
        console.log('ProductEditComponent.ngOnInit');
        this._route.params.subscribe((prms: Params)=>{
          let productEditObservable = this._httpService.getProduct(prms['id']);
          productEditObservable.subscribe((product_edit_data)=>{
              this.productEdit = product_edit_data['data'];
              console.log(this.productEdit)
            });
        });

        this.resetProduct();
    }

    editProduct() {
        console.log('ProductEditComponent.updateProduct');
        let productObservable = this._httpService.editProduct(this.productEdit);
        productObservable.subscribe((product_data: any) => {
            console.log('updateProduct...', product_data);
            // this._router.navigate(['product']);
        //     console.log('data_from_update', product_data);
        //     // this.resetProduct();
            if(!product_data.error){
                console.log(product_data);
                this._router.navigate(['product']);
            }
            else {
                this.createErrors = product_data.error
            }
            }
        )

    }

    resetProduct(){
        this.productEdit={
            name: '',
            quantity: 0,
            price: 0
        }
    }


}
