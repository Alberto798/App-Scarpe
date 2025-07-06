import { Routes } from '@angular/router';
import { ScarpeElencoComponent } from './scarpe-elenco/scarpe-elenco.component';
import { DettaglioScarpaComponent } from './dettaglio-scarpa/dettaglio-scarpa.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    {
        path: "", redirectTo: "list", pathMatch: "full"
    },
    {
        path: "list", component: ScarpeElencoComponent
    },
    {
        path: "dettaglio/:id", component: DettaglioScarpaComponent
    },
    {
        path: "cart", component: CartComponent
    },
    {
        path: "**", redirectTo: "list"
    }
   
    

];
