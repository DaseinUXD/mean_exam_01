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

  getProduct(id) {
    return this._http.get(`products/${id}`);
  };

  editProduct(productEdit: Object) {
    return this._http.patch('/products', productEdit);
  }

  deleteProduct(id) {
      return this._http.delete(`/products/${id}`)
  }
  // deleteProduct(product: Object) {
  //     return this._http.delete('/products', product)
  // }

}
