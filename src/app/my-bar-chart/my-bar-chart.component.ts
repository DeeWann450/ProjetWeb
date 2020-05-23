import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  births;

  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&rows=37&sort=annee' 

  public barChartOptions = { 
    scaleShowVerticalLines : false,
    responsive : true
  };


  public barChartLabels = [];   //Instanciation de la variable barChartLabels qui correspond aux différents label du graphique
  public barChartLabelsTotal = []; // Instanciation de la variable barChartLabelsTotal qui correspond aux différents label du graphique pour le graph total

  public barChartType = 'bar'; //Instanciation de la variable barCharType qui correspond au type de graph et qui ici est commun au deux graphs
  public barChartLegend=true; //Instanciation de la variable barChartLabels qui correspond à l'affichage de la légende 

  public barChartData=[
    {data : [], label : 'Filles', dataset: [], backgroundColor:"#f9ba32",hoverBackgroundColor:'#FFE3A7'},
    {data : [], label : 'Garcons', dataset: [], backgroundColor:"#426E86", hoverBackgroundColor: "#8EB9D0" },
  ];

  public barChartDataTotal=[
    {data : [], label : 'Nombre de naissances' , dataset: [], backgroundColor:"#1A008E", hoverBackgroundColor:"#2E00FE"} 
  ];

  constructor(private http: HttpClient) {    
    this.http.get(this.apiURL).toPromise().then(info => {
      console.log(info);
      this.births = info;
      //console.log(this.births.records.length);
      for(var counter:number = 0; counter<this.births.records.length; counter++){ //On parcourt autant de fois qu'il y a d'années
        this.barChartLabels.unshift(this.births.records[counter].fields.annee); //On rajoute une colonne pour chaque année
        this.barChartData[0].data.unshift(this.births.records[counter].fields.filles); //On rajoute la donnée du nombre de filles dans l'année correspondante 
        this.barChartData[1].data.unshift(this.births.records[counter].fields.garcons); //On rajoute la donnée du nombre de garcons dans l'année correspondante 
        this.barChartLabelsTotal.unshift(this.births.records[counter].fields.annee); //On rajoute une colonne pour chaque année dans le second graphique
        this.barChartDataTotal[0].data.unshift(this.births.records[counter].fields.filles+this.births.records[counter].fields.garcons); //On rajoute la donnée du nombre de naissances dans l'année correspondante 
      }
    })
  }

  ngOnInit(): void {
  }

}
