import { Component, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';
import { Scarpe } from '../../type/scarpe-interface';
import { ScarpeService } from '../services/scarpe.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   @Output() Cart = new EventEmitter<any>()

   constructor(private service: CartService, private router: Router){

   }
   

   goToCart(){
    this.Cart.emit()
    // this.router.navigate(["cart"])
    this.service.getCart()
   }
}
