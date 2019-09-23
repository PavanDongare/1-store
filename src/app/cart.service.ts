import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class CartService {

  constructor(
    private http : HttpClient
  ) { }
  items = [];
  addToCart(product){
    this.items.push(product);
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getItems(){
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}