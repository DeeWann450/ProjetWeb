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


  public barChartLabels = [];
  public barChartLabelsTotal = [];

  public barChartType = 'bar';
  public barChartLegend=true;

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
      for(var counter:number = 0; counter<this.births.records.length; counter++){
        this.barChartLabels.unshift(this.births.records[counter].fields.annee);
        this.barChartData[0].data.unshift(this.births.records[counter].fields.filles);
        this.barChartData[1].data.unshift(this.births.records[counter].fields.garcons);
        this.barChartLabelsTotal.unshift(this.births.records[counter].fields.annee);
        this.barChartDataTotal[0].data.unshift(this.births.records[counter].fields.filles+this.births.records[counter].fields.garcons);

        //console.log(this.barChartData[0]);
      }
    })
  }

  ngOnInit(): void {
  }

}
