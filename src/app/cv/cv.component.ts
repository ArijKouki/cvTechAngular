import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit{
constructor() {}
  personnes: Personne[] = [];
  selectedPersonne!: Personne;
ngOnInit() {

  this.personnes=[
    new Personne(1,"Kouki","Arij",21,"Arij-Kouki.jpg",43562245,"Software engineer"),
    new Personne(2,"Ben Ammar","Hamza",21,"hamza.jpg",4647484,"Software engineer"),
    new Personne(2,"Britney","Spears",40,"",4647484,"Singer")

  ];
}

  selectPersonne(personne:Personne){
    this.selectedPersonne=personne;
  }

}
