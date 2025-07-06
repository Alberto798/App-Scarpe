import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Scarpe } from '../../type/scarpe-interface';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-cart',
  imports: [AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

   scarpeSelezionate : Scarpe[] = []

  // @Output() goToList = new EventEmitter<any>()

   constructor(private router: Router, protected cartSrvice: CartService){

   }
  ngOnInit(): void {
    
  }
  


  goToLista(){
    // this.goToList.emit()
    this.router.navigate(["list"])
  }

  remove(scarpa: Scarpe){
     this.cartSrvice.rimuoviDalCarrello(scarpa)
  }

  
  




}
