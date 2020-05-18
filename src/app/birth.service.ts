import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BirthService {

  constructor(
    private http: HttpClient
  ) { }

  getBirths() {
    return this.http.get('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&rows=10&sort=annee&facet=annee&facet=garcons');
  }
}