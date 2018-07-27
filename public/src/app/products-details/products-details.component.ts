import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
    title = 'Product Details';
    product: Object;
    createErrors: Object;

    constructor(private  _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
        console.log('ProductDetailsComponent.constructor');
    }

    ngOnInit() {
        console.log('ProductDetailsComponent.ngOnInit');
        this.product = {
            name: '',
            quantity: 0,
            price: 0
        };
        this._route.params.subscribe((prms: Params) => {
            let productObservable = this._httpService.getProduct(prms['id']);
            productObservable.subscribe((product_data) => {
                this.product = product_data['data'];
                console.log(this.product)
            });
        })
    }

    productDetails() {

        console.log('ProductsDetailComponent.productDetails');

        this.product = {
            name: '',
            quantity: 0,
            price: 0

        };

        // let productObservable = this._httpService.getProduct(this.product['_id']);
        // productObservable.subscribe((product_data)=>{
        //     this.product = product_data['data'];
        //     console.log(this.product)
        // });
    }

    deleteProduct(id) {
        console.log('ProductsDetailComponent.deleteProduct');
        console.log('Id passed in??? ', id);


        // this._route.params.subscribe((prms: Params) => {
        let productDeleteObservable = this._httpService.deleteProduct(id);
        productDeleteObservable.subscribe((product_delete: any) => {
            console.log('+_+_+_+_+_+_+_deleteProduct id:_+_+_+_+_+_+_', product_delete);
            if(!product_delete.error){
                console.log('*******this is the product_delete being deleted*****', product_delete);
                this._router.navigate(['product']);
            }
            else{
                this.createErrors = product_delete.error
            }
            // this.product = product_delete['data'];
            // console.log(this.product);
        });
        // });

    };


}
