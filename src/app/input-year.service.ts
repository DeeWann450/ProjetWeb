import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Service qui va stocker l'année entrée par l'utilisateur, afin de la faire passer entre deux composants (birth-rennes et navbar)
export class InputYearService {
  inputYear;

  constructor() { }
}
