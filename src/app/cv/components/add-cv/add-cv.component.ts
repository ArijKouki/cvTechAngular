import { Component } from '@angular/core';
import {Personne} from "../../models/Personne";
import {CvService} from "../../services/cv.service";
import {Router} from "@angular/router";
import {CanComponentDeactivate} from "../../guards/CanDeactivateGuard";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css'
})
export class AddCvComponent implements CanComponentDeactivate{
  newPerson: Personne = new Personne();
  formSubmitted: boolean = false;

  constructor(private cvService: CvService,private router: Router) {}

  onSubmit(): void {
    console.log(this.newPerson)
    this.formSubmitted = true;
    this.cvService.createPersonne(this.newPerson).subscribe(
      (response: Personne) => {
        this.newPerson.id = response.id;
        this.router.navigate(['/cv']);
      },
      (error) => {
        console.error('Error adding new person:', error);
      }
    );
  }

  canDeactivate(): boolean {
    if (this.formSubmitted) {
      return true;
    }

    const fieldsFilled = Object.values(this.newPerson).some(value => !!value);

    if (fieldsFilled) {
      return window.confirm('Are you sure you want to leave? Your changes may be lost.');
    }

    return true;
  }


}
