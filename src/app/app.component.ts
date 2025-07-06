import { Component } from '@angular/core';

import { ScarpeElencoComponent } from './scarpe-elenco/scarpe-elenco.component';
import { Scarpe } from '../type/scarpe-interface';
import { scarpeNikeElenco } from '../mock/scarpe-nike-elenco';
import { DettaglioScarpaComponent } from './dettaglio-scarpa/dettaglio-scarpa.component';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { Router, RouterOutlet } from '@angular/router';
import { ScarpeService } from './services/scarpe.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [
    ScarpeElencoComponent,
    DettaglioScarpaComponent,
    CommonModule,
    HeaderComponent,
    CartComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'scarpe-nike';

  scarpaSelezionata: boolean = false;

  cart: boolean = false;

  listaScarpe: Scarpe[] = scarpeNikeElenco;

  carrello: Scarpe[] = [];

  scarpaSelect : Scarpe | null = null

  constructor(private service: ScarpeService, private router: Router, private cartService : CartService) {}

  scarpaSelected(scarpa: Scarpe) {
    this.scarpaSelezionata = true;
    this.scarpaSelect = scarpa
    console.log(this.scarpaSelect)
    
  }

  scarpaDeselected() {
    this.scarpaSelezionata = false;
  }

  goToCart() {
    this.cart = true;
    this.router.navigate(["cart"])
  }

  goToList() {
    this.cart = false;
  }

  
}
