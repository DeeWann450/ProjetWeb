import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  births;

  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&rows=37&sort=-annee'

  /**
   * Constructeur de la table de données
   * @param http Va permettre de faire la requ^te à l'API
   */
  constructor(private http: HttpClient) { 
    // On récupère le JSON
    this.http.get(this.apiURL).toPromise().then(data => {
      this.births = data;
    })
  }

  ngOnInit(): void {
  }

}
