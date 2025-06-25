import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const factures: Facture[] = [
      { id: 1, designation: "Pantalon", quantite: 5, prixUnitaire: 10, totalUnitaire: 0 },
      { id: 2, designation: "Veste", quantite: 8, prixUnitaire: 15, totalUnitaire: 0 },
      { id: 3, designation: "Chemise", quantite: 3, prixUnitaire: 8, totalUnitaire: 0 },
      { id: 4, designation: "Chapeau", quantite: 9, prixUnitaire: 17, totalUnitaire: 0 },
      { id: 5, designation: "Robe", quantite: 12, prixUnitaire: 20, totalUnitaire: 0 },
    ];


    return { factures } // un lien endpoint api/todos 

  }

}
