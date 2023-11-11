import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";
import {CvService} from "../cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit{
constructor(private cvService:CvService) {}
  personnes: Personne[] = [];
  selectedPersonne!: Personne;
ngOnInit() {

  this.personnes=this.cvService.getPersonnes();
}

  selectPersonne(personne:Personne){
    this.selectedPersonne=personne;
  }

}
