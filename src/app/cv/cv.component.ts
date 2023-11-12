import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";
import {CvService} from "../cv.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit{
constructor(private cvService:CvService) {}
  personnes$: Observable<Personne[]>=of([]);
  selectedPersonne!: Personne;
ngOnInit() {
  this.personnes$=this.cvService.getPersonnes()
}

  selectPersonne(personne:Personne){
    this.selectedPersonne=personne;
  }

}
