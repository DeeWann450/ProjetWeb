import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  births;

  total;

  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&rows=37&sort=-annee'

  constructor(private http: HttpClient) { 
    this.http.get(this.apiURL).toPromise().then(data => {
      console.log(data);
      this.births = data;
      this.total = parseInt(this.births.records[0].fields.garcons) + parseInt(this.births.records[0].fields.filles) 
    })
  }

  ngOnInit(): void {
  }

}
