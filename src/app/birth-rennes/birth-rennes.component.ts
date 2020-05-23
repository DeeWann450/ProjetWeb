import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { InputYearService } from '../input-year.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-birth-rennes',
  templateUrl: './birth-rennes.component.html',
  styleUrls: ['./birth-rennes.component.css']
})
export class BirthRennesComponent implements OnInit {

  total;

  value;

  births;

  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&refine.annee='

  constructor(private http: HttpClient, private inputYearSerice:InputYearService, private router: Router) {    
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.value = this.inputYearSerice.inputYear;
      if(typeof this.value !== 'undefined') {
        this.http.get(this.apiURL + this.value).toPromise().then(data => {
          console.log(data);
          this.births = data;
          this.total = parseInt(this.births.records[0].fields.garcons) + parseInt(this.births.records[0].fields.filles) 
        })
      }
    })
  }

  ngOnInit(): void {

  }
}
