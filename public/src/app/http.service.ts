import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getProducts() {
    return this._http.get('/products');
  }



  createProduct(product: Object) {
    return this._http.post('/products', product);
  }

  product(id) {
    return this._http.get('/products/:id', id);
  };

  updateProduct(id) {
    return this._http.put('/products/:id/edit', id);
  }

}
