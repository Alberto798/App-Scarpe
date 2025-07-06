import { Injectable } from '@angular/core';
import { Scarpe } from '../../type/scarpe-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

    carrello : Scarpe[] = []

  
   private cartSource = new BehaviorSubject<Scarpe[]>([])
   cart$ = this.cartSource.asObservable()

  getCart(): Scarpe[]{
    return this.carrello
  }

  scarpaAggiunta(scarpa: Scarpe) {
    this.carrello.push(scarpa)
    this.cartSource.next(this.carrello)
  }

  rimuoviDalCarrello(scarpa : Scarpe){
    this.carrello = this.carrello.filter( s => s.id !== scarpa.id)
    this.cartSource.next(this.carrello)
  }
}
