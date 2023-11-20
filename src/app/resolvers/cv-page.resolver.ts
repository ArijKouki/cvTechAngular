import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {map, Observable} from 'rxjs';
import { CvService } from '../services/cv.service';
import { Personne } from '../model/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvPageResolver implements Resolve<Personne | null> {

  constructor(private cvService: CvService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Personne | null> {
    const id = route.params['id'];
    return this.cvService.getPersonneById(id).pipe(
      map(personne => personne || null)
    );;
  }
}
