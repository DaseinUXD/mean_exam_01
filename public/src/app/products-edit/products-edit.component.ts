import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
    selector: 'app-products-edit',
    templateUrl: './products-edit.component.html',
    styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
    title = 'Update Product';
    product: Object;
    createErrors: Object;

    constructor(private _httpService: HttpService, private  _router: Router) {
    }

    ngOnInit() {

        this.resetProduct();
    }

    updateProduct() {
        this.product = [];
        let productObservable = this._httpService.product(this.product);
        productObservable.subscribe((product_data: any) => {
            console.log('data_from_update', product_data);
            // this.resetProduct();
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
        this.product={
            name: '',
            quantity: 0,
            price: 0
        }
    }


}
