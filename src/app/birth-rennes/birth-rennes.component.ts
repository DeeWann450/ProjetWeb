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
  total; // Total des naissances sur un an

  value; // Année rentrée par l'utilisateur

  births; // Va contenir les données du JSON

  // URL de l'api (auquel on va ajouter l'année)
  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&refine.annee='

  /**
   * Constructeur du component birth-rennes
   * @param http Va servir à faire la requête pour récupérer le JSON via l'API
   * @param inputYearSerice Va permettre de récupérer l'année entrée par l'utilisateur
   * @param router Va permettre de raffraichir le components chaque fois qu'on appuie sur le boutton search
   */
  constructor(private http: HttpClient, private inputYearSerice:InputYearService, private router: Router) {    
    // On s'abonne aux evenemnts router
    this.router.events.pipe(
      // On filtre puisqu'on s'interesse au NavigationEnd (s'active chaque fois qu'on route à un component)
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Dans le cas où il y a eu un NavigationEnd
      this.value = this.inputYearSerice.inputYear;
      // Si value a bien été entré par l'utilisateur
      if(typeof this.value !== 'undefined') {
        // On récupère les données
        this.http.get(this.apiURL + this.value).toPromise().then(data => {
          this.births = data;
          this.total = parseInt(this.births.records[0].fields.garcons) + parseInt(this.births.records[0].fields.filles) 
        })
      }
    })
  }

  ngOnInit(): void { }
}
