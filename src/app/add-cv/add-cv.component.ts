import { Component } from '@angular/core';
import {Personne} from "../model/Personne";
import {CvService} from "../services/cv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css'
})
export class AddCvComponent {
  newPerson: Personne = new Personne();

  constructor(private cvService: CvService,private router: Router) {}

  onSubmit(): void {
    console.log(this.newPerson)
    this.cvService.createPersonne(this.newPerson).subscribe(
      () => {
        //this.router.navigate(['/cv']);
      },
      (error) => {
        console.error('Error adding new person:', error);
      }
    );
  }

}
