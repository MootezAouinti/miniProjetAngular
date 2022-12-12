import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
})
export class AddVetementComponent implements OnInit {

  newVetement = new Vetement();
  marques! : Marque[];
  newIdMarque! : number;
  newMarque! : Marque;

  message! :string;
  constructor(private vetementService : VetementService,
              private router : Router) { }

  ngOnInit(): void {
    //this.marques = this.vetementService.listeMarques();
    this.vetementService.listeMarques().subscribe(mqs => {this.marques = mqs._embedded.marques;
    console.log(mqs);
});

  }

  

  addVetement(){
    this.newVetement.marque = this.marques.find(mq => mq.idMarque == this.newIdMarque)!;
    this.vetementService.ajouterVetement(this.newVetement)
    .subscribe(vet => {
    console.log(vet);
    this.router.navigate(['vetements']);
    });
    }

}
