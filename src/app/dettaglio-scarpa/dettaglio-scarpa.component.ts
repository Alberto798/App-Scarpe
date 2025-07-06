import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Scarpe } from '../../type/scarpe-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ScarpeService } from '../services/scarpe.service';


@Component({
  selector: 'app-dettaglio-scarpa',
  imports: [],
  templateUrl: './dettaglio-scarpa.component.html',
  styleUrl: './dettaglio-scarpa.component.css'
})
export class DettaglioScarpaComponent implements OnInit {

  

   scarpa: Scarpe | undefined 

   constructor(private router: Router, private route: ActivatedRoute, private service: ScarpeService){

   }
  ngOnInit(): void {
    
    const id = this.route.snapshot.params["id"]
    if(id){
      this.scarpa = this.service.getScarpa(id)
    }
    
  }

  //  @Output() selezionata = new EventEmitter<Scarpe>()

   goToLista(){
    this.router.navigate(["list"])
   }
  


   
   



}
