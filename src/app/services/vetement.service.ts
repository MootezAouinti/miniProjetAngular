import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Vetement } from '../model/vetement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { MarqueWrapper } from '../model/MarqueWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class VetementService {
  apiURLMq: string = 'http://localhost:8080/vetements/mq';
  

  vetements! : Vetement [];
  //marques : Marque[];
  

  constructor(private http : HttpClient) { 
    
    
  /*  this.marques = [
      {idMarque : 1, nomMarque : "ZARA"},
      {idMarque : 2, nomMarque : "Bershka"}
    ];
    /*this.vetements = [  {idVetement : 1, nomVetement : "Pantalon", prixVetement : 70.0, genreVetement : "Homme",
                        marque : {idMarque : 1, nomMarque : "ZARA"} },
                        {idVetement : 2, nomVetement : "T-shirt", prixVetement : 59.9, genreVetement : "Femme",
                        marque : {idMarque : 2, nomMarque : "Bershka"} },
                        {idVetement : 3, nomVetement :"Veste", prixVetement : 45.9, genreVetement : "Femme",
                        marque : {idMarque : 1, nomMarque : "ZARA"}}

    ];*/
  }

  

  listeVetement(): Observable<Vetement[]>{
    return this.http.get<Vetement[]>(apiURL);
    }

  

  ajouterVetement( vet: Vetement):Observable<Vetement>{
    return this.http.post<Vetement>(apiURL, vet, httpOptions);
    }

  

    supprimerVetement(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      consulterVetement(id: number): Observable<Vetement> {
        const url = `${apiURL}/${id}`;
        return this.http.get<Vetement>(url);
        }
        

      

        updateVetement(vet :Vetement) : Observable<Vetement>
        {
        return this.http.put<Vetement>(apiURL, vet, httpOptions);
        }

        trierVetements(){
      this.vetements = this.vetements.sort((n1,n2) => {
      if (n1.idVetement! > n2.idVetement!) {
      return 1;
      }
      if (n1.idVetement! < n2.idVetement!) {
      return -1;
      }
      return 0;
      });
      }

        

          listeMarques():Observable<MarqueWrapper>{
            return this.http.get<MarqueWrapper>(this.apiURLMq);
            }
        
          
          rechercherParMarque(idMarque: number): Observable<Vetement[]> {
          const url = `${apiURL}/prodscat/${idMarque}`;
          return this.http.get<Vetement[]>(url);
            }

            rechercherParNom(nom: string):Observable< Vetement[]> {
              const url = `${apiURL}/vetsByName/${nom}`;
              return this.http.get<Vetement[]>(url);
              }

  }
