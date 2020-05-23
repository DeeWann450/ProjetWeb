import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { InputYearService } from '../input-year.service';

@Component({
  selector: 'app-birth-rennes',
  templateUrl: './birth-rennes.component.html',
  styleUrls: ['./birth-rennes.component.css']
})
export class BirthRennesComponent implements OnInit {

  births;

  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q='

  constructor(private http: HttpClient, private inputYearSerice:InputYearService) {    
    var value = this.inputYearSerice.inputYear;
    if(typeof value !== 'undefined') {
      this.http.get(this.apiURL + value).toPromise().then(data => {
        console.log(data);
        this.births = data;
      })
    }
    else {
      this.http.get(this.apiURL + "1999").toPromise().then(data => {
        console.log(data);
        this.births = data;
      })
    }
  }

  ngOnInit(): void {
  }
}
