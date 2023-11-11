import {Component, Input} from '@angular/core';
import {Personne} from "../model/Personne";

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrl: './cv-detail.component.css'
})
export class CvDetailComponent {

  @Input() selectedPersonne!: Personne;


}
