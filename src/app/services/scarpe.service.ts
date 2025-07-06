import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Scarpe } from '../../type/scarpe-interface';
import { scarpeNikeElenco } from '../../mock/scarpe-nike-elenco';

@Injectable({
  providedIn: 'root',
})
export class ScarpeService {
  

  listaScarpe: Scarpe[] = scarpeNikeElenco;


  

  rimuoviScarpa(scarpa: Scarpe) {
   this.listaScarpe = this.listaScarpe.filter((scarpe) => scarpe.id !== scarpa.id);
  }

 
  
  getScarpa(id: number){
    return this.listaScarpe.find(s => s.id == id) // non guarda il tipo ma si concentra sul valore 
  }

  
}
