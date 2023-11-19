import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/Personne";
import {CvService} from "../services/cv.service";
import {EmbaucheService} from "../services/embauche.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export class CvPageComponent implements OnInit{
  personne!: Personne;

  constructor(
    private cvService :CvService,
    private embaucheService: EmbaucheService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
        const id = params['id'];
        this.cvService.getPersonneById(id).subscribe(
          personne => {
            if (personne) {
              this.personne = personne;
            }
          }
        )
      }
    )

  }

  deletePersonne() {
    if (this.personne) {
      this.cvService.deletePersonne(this.personne.id).subscribe(
        () => {
          //this.router.navigate(['/cv']);
        },
        error => {
          console.error('Error deleting CV:', error);
        }
      );
    }
  }

}
