export interface Facture {
    id:number; // null : champ optionnel
    designation:string;
    quantite: number;
    prixUnitaire: number;
    totalUnitaire: number;
}
