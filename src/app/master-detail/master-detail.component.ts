import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../model/Personne";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, of} from "rxjs";

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrl: './master-detail.component.css'
})
export class MasterDetailComponent implements OnInit {
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
