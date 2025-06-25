import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureListComponent } from './facture-list/facture-list.component';

const routes: Routes = [
  {
    path:'facture-list', 
    component: FactureListComponent, 
    title: 'Facture List',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
