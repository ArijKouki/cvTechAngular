import {Component, OnInit} from '@angular/core';
import {Personne} from "../../models/Personne";
import {CvService} from "../../services/cv.service";
import {EmbaucheService} from "../../services/embauche.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export class CvPageComponent implements OnInit{
  personne: Personne|null=null;
  personneForm: FormGroup;


  constructor(
    private cvService :CvService,
    public authService:AuthService,
    private embaucheService: EmbaucheService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,

  ) {
    this.personneForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      age: [0, Validators.required],
      path: [''],
      cin: [1, Validators.required],
      job: ['']
    });
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.personne = data['personne'];
      this.updateFormWithPersonne();
    });
  }

  private updateFormWithPersonne() {
    if (this.personne) {
      this.personneForm.patchValue(this.personne);
    }
  }

  updatePersonne() {
    if (this.personneForm.valid) {
      const updatedPersonne: Personne = { ...this.personneForm.value };
      if (this.personne) {
        this.cvService.updatePersonne(this.personne.id, updatedPersonne).subscribe(
          () => {
            console.log('Personne updated successfully');
            this.router.navigate(['/cv']);
          },
          error => {
            console.error('Error updating CV:', error);
          }
        );
      }
    }
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
