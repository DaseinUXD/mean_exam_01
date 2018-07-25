import {Component, OnInit} from '@angular/core';
import {HttpService} from "../http.service";

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    title = 'Product List';
    products: Object[];

    constructor(private _httpService: HttpService) {
        console.log('ProcuctsComponent.constructor')

    }

    ngOnInit() {
        console.log('ProductsComponent.ngOnInit');

        this.products = [];

        let productsObservable = this._httpService.getProducts();
        productsObservable.subscribe(
            (products_data) => {
                this.products = products_data['data'];
            });


    }

}
