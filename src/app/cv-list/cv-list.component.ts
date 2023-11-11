import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../model/Personne";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css'
})
export class CvListComponent implements OnInit{
  @Input()personnes: Personne[] =[]
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

}
