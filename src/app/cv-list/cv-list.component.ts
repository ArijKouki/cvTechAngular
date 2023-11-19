import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../model/Personne";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css'
})
export class CvListComponent implements OnInit{
  @Input()personnes: Personne[]|null=[];
  constructor() {
  }

  ngOnInit() {
  }

  @Output() selectedPersonne = new EventEmitter();

 selectPersonne(selectedPersonne:Personne){
    this.selectedPersonne.emit(
      selectedPersonne
   )
 }

  getJuniors(): Personne[]|null {
   if(this.personnes) {
     return this.personnes.filter(personne => personne.age < 40);
   }
   return null
  }

  getSeniors(): Personne[]|null {
    if(this.personnes) {
      return this.personnes.filter(personne => personne.age >= 40);
    }
    return null
  }

}
