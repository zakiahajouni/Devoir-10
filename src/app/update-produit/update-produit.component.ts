import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/model/produit.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Categorie } from 'src/model/categorie.model';


@Component({
  selector: 'app-update-produit',
  templateUrl:'./update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  categories! : Categorie[];
  updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
          this.categories = this.produitService.listeCategories();
          this.currentProduit =
          this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
          this.updatedCatId=this.currentProduit.categorie.idCat;
                }

  updateProduit() {
          this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
          this.produitService.updateProduit(this.currentProduit);
          this.router.navigate(['produits']);
                  }

}
