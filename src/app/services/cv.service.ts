import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Personne} from "../model/Personne";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient,@Inject(PLATFORM_ID) private platformId: Object) {
  }
  private personnes:Personne[]=[];


  getPersonnes(filter?: any): Observable<Personne[]> {
    let params = new HttpParams();
    if (filter) {
      params = params.set('filter', JSON.stringify(filter));
    }

    return this.http.get<Personne[]>(this.apiUrl, { params }).pipe(
      tap((data) => (this.personnes = data)),
      catchError((error) => {
        console.error('Error fetching data from the API:', error);
        return of(this.getFakePersonnes());
      })
    );
  }

  getFakePersonnes(){
    return [
      new Personne( 'Kouki', 'Arij', 21, 'Arij-Kouki.jpg', 43562245, 'Software engineer'),
      new Personne('Ben Ammar', 'Hamza', 21, 'hamza.jpg', 4647484, 'Software engineer'),
      new Personne('Britney', 'Spears', 40, '', 4647484, 'Singer'),
    ];
  }

  getPersonneById(id: number): Observable<Personne | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Personne>(url);
  }


  deletePersonne(cvId: number|undefined): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${cvId}`;
    let token:string | null=null;
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('currentUser');
    }
    const params = token ? new HttpParams().set('access_token', token) : undefined;

    return this.http.delete<void>(deleteUrl, { params }).pipe(

        tap(() => {
          this.personnes = this.personnes.filter(person => person.id !== cvId);
        }),
        catchError(error => {
          console.error('Error deleting data from the API:', error);
          return of(error);
        })
      );
  }

  createPersonne(personne: Personne): Observable<Personne> {
    let token:string | null=null;
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('currentUser');
    }
    const params = token ? new HttpParams().set('access_token', token) : undefined;

    return this.http.post<Personne>(this.apiUrl, personne,{ params }).pipe(
        tap((newPersonne) => {
          this.personnes.push(newPersonne);
        }),
        catchError((error) => {
          console.error('Error creating new person:', error);
          if (error instanceof HttpErrorResponse) {
            console.error('Response body:', error.error);
          }
          return of(error);
        })
      );

  }



  updatePersonne(cvId: number|undefined,personne:Personne): Observable<Personne> {
    const updateUrl = `${this.apiUrl}/${cvId}`;
    let token: string | null = null;
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('currentUser');
    }
    const params = token ? new HttpParams().set('access_token', token) : undefined;

    return this.http.patch<Personne>(updateUrl,personne,{ params }).pipe(
      tap((newPersonne) => {
        this.personnes.push(newPersonne);
      }),
      catchError((error) => {
        console.error('Error creating new person:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Response body:', error.error);
        }
        return of(error);
      })
    );

  }



}

