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
    return this.http.get('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&rows=34&facet=annee&facet=garcons&facet=filles&facet=indetermine&facet=lieu_domicile&facet=lieu_hopital&facet=lieu_clinique&facet=lieu_autres&facet=qj_parents_maries&facet=qj_sans_filiation&facet=qj_non_reconnu&facet=qj_reconnu_pere&facet=qj_reconnu_mere&facet=qj_reconnu_lesdeux&facet=qj_inconnue&facet=dp_rennes&facet=dp_exterieur&facet=dp_sans_ad_parents&facet=dp_sans_parents&facet=dc_decla_conjointe&facet=rec_pere&facet=rec_mere&facet=rec_lesdeux')
  }
}