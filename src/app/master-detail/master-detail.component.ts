import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../model/Personne";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable, of} from "rxjs";

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrl: './master-detail.component.css'
})
export class MasterDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router) {}

  personnes$: Observable<Personne[]>=of([]);
  selectedPersonne: Personne|undefined;
  ngOnInit() {
    this.personnes$ = this.route.data.pipe(
      map(data => data['personnes'])
    );

  }


  selectPersonne(personne:Personne){
    this.selectedPersonne=personne;
    this.router.navigate(['/list', personne.id]);
  }


}
