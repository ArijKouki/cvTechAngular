import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../../models/Personne";

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css'
})
export class CvItemComponent implements OnInit{
  @Input() personne!: Personne
  @Output() selectedPersonne = new EventEmitter()
  constructor() {
  }
  ngOnInit() {
  }

  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    )
  }

}
