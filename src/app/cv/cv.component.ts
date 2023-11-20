import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";
import {CvService} from "../services/cv.service";
import {map, Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit{
constructor(private route: ActivatedRoute) {}
  personnes$: Observable<Personne[]>=of([]);
  selectedPersonne!: Personne;
ngOnInit() {
  this.personnes$ = this.route.data.pipe(
    map(data => data['personnes'])
  );
}

  selectPersonne(personne:Personne){
    this.selectedPersonne=personne;
  }

}
