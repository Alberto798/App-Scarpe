import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Scarpe } from '../../type/scarpe-interface';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { ScarpeService } from '../services/scarpe.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-scarpe-elenco',
  imports: [CommonModule],
  templateUrl: './scarpe-elenco.component.html',
  styleUrl: './scarpe-elenco.component.css',
})
export class ScarpeElencoComponent implements OnInit {
   scarpe: Scarpe[] = [];

  // @Output() selezionata = new EventEmitter<Scarpe>();
  // @Output() addScarpa = new EventEmitter<Scarpe>();

  constructor(private scarpeService: ScarpeService, private router: Router, private cartService: CartService) {}
  ngOnInit(): void {
    this.scarpe = this.scarpeService.listaScarpe
  }

  rimuoviScarpa(scarpa: Scarpe) {
    this.scarpeService.rimuoviScarpa(scarpa);
    console.log('rimuoviScarpa', scarpa);
    this.scarpe = this.scarpeService.listaScarpe;
  }

  goToDetail(scarpa: Scarpe) {
    // this.selezionata.emit(scarpa);
    this.router.navigate(["dettaglio", scarpa.id])
  }

  addToCart(scarpa: Scarpe) {
    this.cartService.scarpaAggiunta(scarpa)
    console.log(scarpa);
  }
}
