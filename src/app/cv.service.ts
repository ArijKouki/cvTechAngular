import { Injectable } from '@angular/core';
import {Personne} from "./model/Personne";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[] = [];
  constructor() {
    this.personnes=[
      new Personne(1,"Kouki","Arij",21,"Arij-Kouki.jpg",43562245,"Software engineer"),
      new Personne(2,"Ben Ammar","Hamza",21,"hamza.jpg",4647484,"Software engineer"),
      new Personne(2,"Britney","Spears",40,"",4647484,"Singer")
    ];
  }

  getPersonnes(){
    return this.personnes;
  }
}
