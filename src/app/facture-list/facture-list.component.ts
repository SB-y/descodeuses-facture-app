import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Facture } from '../models/facture.model';
import { FactureService } from '../services/facture.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-facture-list',
  standalone: false,
  templateUrl: './facture-list.component.html',
  styleUrl: './facture-list.component.css'
})
export class FactureListComponent implements OnInit {

  factures! :Facture [];
  objetForm!: FormGroup;
  total: number = 0;
  id: number=1;


  constructor(
    private objetBuilder: FormBuilder, private factureService : FactureService, private snackBar: MatSnackBar,) { }


    ngOnInit(): void {
      this.fetchFacture(); // plus de calcul ici
    }

  fetchFacture() {
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.factureService.getFactures().subscribe((data) => {
      this.factures = data;

      this.calculerTotalU();
      this.calculerTotal();

      this.objetForm = this.objetBuilder.group({
        id: [null],
        designation: [''],
        quantite: [''],
        prixUnitaire: [''],
        totalUnitaire: [''],
      });
    });

  }


  calculerTotalU() {
    for (let i = 0; i < this.factures.length; i++) {
      this.factures[i].totalUnitaire = this.factures[i].prixUnitaire * this.factures[i].quantite;
    };

    return;
  }


  calculerTotal() {
    this.total = 0;
    for (let objet of this.factures) {
      const quantite = objet.quantite;
      const prixUnitaire = objet.prixUnitaire;
      this.total += quantite * prixUnitaire;
    };

    return;
  }



  onAddFacture() {
    if (this.objetForm.valid) {
      this.factureService.addFacture(this.objetForm.value).subscribe(data=>
        {// actualiser la liste après l'ajout
          this.fetchFacture(); // synchronisation du front avec le "serveur" (visualier le changement dans l'affichage)
        });
    }
      this.objetForm.reset();

  }

  onDeleteFacture(id:number | null) {

    if (id==null)
      return;
  
    this.factureService.deleteFacture(id).subscribe(()=>
      {// actualiser la liste après la suppression
        this.fetchFacture(); // synchronisation du front avec le "serveur" (visualier le changement dans l'affichage)
        this.snackBar.open('Deleted !','', {duration:1000});
      })
}


}