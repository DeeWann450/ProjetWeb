import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birth-rennes',
  templateUrl: './birth-rennes.component.html',
  styleUrls: ['./birth-rennes.component.css']
})
export class BirthRennesComponent implements OnInit {

  births;

  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&rows=10&sort=annee&facet=annee&facet=garcons'

  constructor(private http: HttpClient) {    
    this.http.get(this.apiURL).toPromise().then(data => {
      console.log(data);
      this.births = data;
    })
  }

  ngOnInit(): void {
  }

}
