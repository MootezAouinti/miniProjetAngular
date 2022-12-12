import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from 'src/app/model/marque.model';
import { Vetement } from 'src/app/model/vetement.model';
import { VetementService } from '../vetement.service';

@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  //styleUrls: ['./update-vetement.component.css']
})
export class UpdateVetementComponent implements OnInit{
  currentVetement = new Vetement();
  marques! : Marque[];
  updatedMqId! : number;

  constructor ( private activatedRoute: ActivatedRoute,
                private router :Router,
                private vetementService: VetementService) { }

  ngOnInit(): void {
    this.vetementService.listeMarques().
    subscribe(mqs => {this.marques = mqs._embedded.marques;
    console.log(mqs);
    });



    this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']).subscribe( vet =>{ this.currentVetement = vet;
      this.updatedMqId = this.currentVetement.marque.idMarque;
    
    } ) ;

    
  }

  updateVetement() {
    //this.currentVetement.marque = this.marques.find(mq => mq.idMarque == this.updatedMqId)!;
    this.vetementService.updateVetement(this.currentVetement).subscribe(prod => {
    this.router.navigate(['vetements']); }
    );
    }
    
  

}
