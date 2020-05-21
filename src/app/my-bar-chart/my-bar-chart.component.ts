import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  births;

  private apiURL = 'https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=naissances-a-rennes&q=&rows=10&sort=annee&facet=annee&facet=garcons';

  public barChartOptions = { 
    scaleShowVerticalLines : false,
    responsive : true
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend=true;

  public barChartData=[
    {data : [], label : 'Filles'},
    {data : [], label : 'Garcons'},
  ];

  constructor(private http: HttpClient) {    
    this.http.get(this.apiURL).toPromise().then(info => {
      console.log(info);
      this.births = info;
      //console.log(this.births.records.length);
      for(var counter:number = 0; counter<this.births.records.length; counter++){
        this.barChartLabels.push(this.births.records[counter].fields.annee);
        this.barChartData[0].data.push(this.births.records[counter].fields.filles);
        this.barChartData[1].data.push(this.births.records[counter].fields.garcons);

        //console.log(this.barChartData[0]);
      }
    })
  }

  ngOnInit(): void {
  }

}
