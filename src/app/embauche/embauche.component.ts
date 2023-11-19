import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";
import {EmbaucheService} from "../services/embauche.service";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrl: './embauche.component.css'
})
export class EmbaucheComponent implements OnInit{
  personnes: Personne[]=[];
  constructor(private embaucheService:EmbaucheService) {
  }

  ngOnInit(){
    this.personnes= this.embaucheService.getEmbauchees();
  }

}
