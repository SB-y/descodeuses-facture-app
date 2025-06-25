import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../models/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private apiURL = "api/factures"; 

  constructor(private http:HttpClient) { }


// create
addFacture(item : Facture) {
  return this.http.post<Facture>(this.apiURL, item);
}

// Read
// fetch liste
getFactures() {
  //HTTP GET sans 2eme parametre parce que il y a pas de body
  return this.http.get<Facture[]>(this.apiURL);
}

// Read
// fetch un item de facture
getFacture(id:number) {
return this.http.get<Facture>(this.apiURL+"/"+id );
}

// Update
updateFacture(item:Facture) {
  return this.http.put<Facture>(this.apiURL +'/'+ item.id, item);
}

// Delete
deleteFacture(id:number) {
  return this.http.delete(this.apiURL +'/'+ id);
}



}
