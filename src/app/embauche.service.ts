import { Injectable } from '@angular/core';
import {Personne} from "./model/Personne";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[]=[];
  constructor() { }
  getEmbauchees():Personne[]{
    return this.personnes;
  }
  embaucher(personne:Personne):void{
    const index= this.personnes.indexOf(personne);
    if (index<0){
      this.personnes.push(personne);
    }else {
      alert(`${personne.name} est déjà embauchée!`)
    }
  }

  debaucher(personne:Personne):void{
    const index= this.personnes.indexOf(personne);
    if (index>=0){
      this.personnes.splice(index,1);
    }
  }

}