import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureListComponent } from './facture-list/facture-list.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';


export const routes: Routes = [
  {
    path:'', 
    component: FactureListComponent, 
    title: 'Gestion de facture',
    data:{isMenu: true}
},
{
  path:'calculatrice', 
  component: CalculatriceComponent, 
  title: 'Calculatrice',
  data:{isMenu: true}
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
