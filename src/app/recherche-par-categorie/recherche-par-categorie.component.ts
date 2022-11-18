import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/model/categorie.model';
import { Produit } from 'src/model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ProduitsComponent } from '../produits/produits.component';


@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  IdCategorie! : number;
  categorie!: Categorie[];
  produits!: Produit[];
 

  constructor(private produitService: ProduitService) { }
  ngOnInit(): void {
    this.categorie =this.produitService.listeCategories();
    this.produits = [];
  }
   onChange(){
    console.log(this.IdCategorie);
    this.produits = this.produitService.rechercherParCategorie(this.IdCategorie)
   }
   supprimerProduit(p: Produit)
{
 let conf = confirm("Etes-vous sûr ?");
if (conf)
 this.produitService.supprimerProduit(p);
 this.produits = this.produitService.rechercherParCategorie(this.IdCategorie)
 }
}
