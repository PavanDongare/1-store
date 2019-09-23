import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  checkoutForm ;

  constructor( 
    private cartService: CartService,
    private formBuilder : FormBuilder
  
  ) { 
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
 
  onSubmit(customerData){
    console.warn('Your order has been submitted', customerData);
    this.cartService.clearCart();
    console.log(customerData);
    console.log(this.cartService.getItems());
    this.checkoutForm.reset();
  }

  ngOnInit() {
    
    console.log(this.items);
  }

  
  

}