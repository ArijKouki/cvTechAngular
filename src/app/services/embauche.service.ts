import { Injectable } from '@angular/core';
import {Personne} from "../model/Personne";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[]=[];
  constructor(private toastr: ToastrService) { }
  getEmbauchees():Personne[]{
    return this.personnes;
  }
  embaucher(personne:Personne):void{
    const index= this.personnes.indexOf(personne);
    if (index<0){
      this.personnes.push(personne);
      this.toastr.success(`${personne.name} a été embauché(e)`, 'Embauche réussie');
    } else {
      this.toastr.warning(`${personne.name} est déjà embauché(e)`, 'Erreur d\'embauche');
    }
  }

  debaucher(personne:Personne):void{
    const index= this.personnes.indexOf(personne);
    if (index>=0){
      this.personnes.splice(index,1);
    }
  }

}
