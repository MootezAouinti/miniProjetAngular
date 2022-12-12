import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  //styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent implements OnInit {

  vetements! : Vetement[];
  IdMarquee! : number;
  marques! : Marque[];

  constructor(private vetementService : VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeMarques().
    subscribe(mqs => {this.marques = mqs._embedded.marques;
    console.log(mqs);
    });
  }

  onChange(){
    this.vetementService.rechercherParMarque(this.IdMarquee).
    subscribe(vets =>{this.vetements=vets});

  }

}
