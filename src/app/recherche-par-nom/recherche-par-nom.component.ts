import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  //styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {


  nomVetement! : string;
  vetements! : Vetement[];
  allVetements! : Vetement[];
  searchTerm! : string;
  constructor(private vetementService : VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeVetement().subscribe(vets => {
      console.log(vets);
      this.vetements = vets;
      });
    
  }

  rechercherVets(){
    this.vetementService.rechercherParNom(this.nomVetement).subscribe(vets => {
    this.vetements = vets;
    console.log(vets)});
  }

  onKeyUp(filterText : string){
    this.vetements = this.allVetements.filter(item =>item.nomVetement.toLowerCase().includes(filterText));
    }

}
