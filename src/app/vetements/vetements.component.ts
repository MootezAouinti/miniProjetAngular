import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html'
})
export class VetementsComponent implements OnInit {

  vetements? : Vetement [];
  
  
  constructor(private vetementService : VetementService) {
    //this.vetements=[];
    }

  ngOnInit(): void {
    this.chargerVetements();
      
  }

  chargerVetements(){
    this.vetementService.listeVetement().subscribe(vets => {
      console.log(vets);
      this.vetements = vets;
      }); 

  
  }

  supprimerVetement(v: Vetement)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.vetementService.supprimerVetement(v.idVetement).subscribe(() => {
console.log("vetement supprimé");
this.chargerVetements();
});
} 

  

}
