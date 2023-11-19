import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CvService} from "../services/cv.service";
import {Router} from "@angular/router";
import {Personne} from "../model/Personne";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {

  searchControl = new FormControl();
  suggestions: any[] = [];
  showOptions: boolean = false;
  constructor(private cvService:CvService, private router: Router) {
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe((searchTerm: string) => {
      this.cvService.getPersonnes({ where: { name: { like: `%${searchTerm}%` } } })
        .subscribe((results: any[]) => {
          this.suggestions = results;
        });
    });
  }

  onSelect(personne: Personne) {
    this.router.navigateByUrl(`/cv/${personne.id}`);
    this.showOptions= false;
  }

}
