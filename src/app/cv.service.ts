import { Injectable } from '@angular/core';
import {Personne} from "./model/Personne";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {
  }
  private personnes:Personne[]=[];



  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl).pipe(
      tap(data => this.personnes = data),
      catchError(error => {
        console.error('Error fetching data from the API:', error);
        return of(this.getFakePersonnes());
      })
    );
  }
  getFakePersonnes(){
    return [
      new Personne(1, 'Kouki', 'Arij', 21, 'Arij-Kouki.jpg', 43562245, 'Software engineer'),
      new Personne(2, 'Ben Ammar', 'Hamza', 21, 'hamza.jpg', 4647484, 'Software engineer'),
      new Personne(3, 'Britney', 'Spears', 40, '', 4647484, 'Singer'),
    ];
  }

  getPersonneById(id: number): Observable<Personne | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Personne>(url);
  }
  deletePersonne(cvId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${cvId}`;
    return this.http.delete<void>(deleteUrl).pipe(
      tap(() => {
        //this.personnes = this.personnes.filter(person => person.id !== cvId);
      }),
      catchError(error => {
        console.error('Error deleting data from the API:', error);
        return of(error);
      })
    );
  }

}

