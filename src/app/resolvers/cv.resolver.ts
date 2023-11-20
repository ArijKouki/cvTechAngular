import { ResolveFn } from '@angular/router';
import {Personne} from "../model/Personne";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable, tap} from 'rxjs';
import { CvService } from '../services/cv.service';
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class CvResolver implements Resolve<Personne[]>{

  constructor(private cvService: CvService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Personne[]> {
    return this.cvService.getPersonnes()
  }

};
