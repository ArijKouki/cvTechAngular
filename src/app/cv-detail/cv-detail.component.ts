import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";
import {EmbaucheService} from "../services/embauche.service";

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrl: './cv-detail.component.css'
})
export class CvDetailComponent implements OnInit{

  @Input() selectedPersonne!: Personne;
  constructor(private embaucheService:EmbaucheService) {
  }
  ngOnInit() {
  }
  embaucher():void{
    this.embaucheService.embaucher(this.selectedPersonne);
  }


}
