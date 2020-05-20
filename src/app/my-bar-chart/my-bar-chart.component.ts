import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = { 
    scaleShowVerticalLines : false,
    responsive : true
  };

  public barChartLabels = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
  public barChartType = 'bar';
  public barChartLegend=true;

  public barChartData=[
    {data : [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020], label : 'Test A'},
    {data : [2020,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020], label : 'Test B'},
    {data : [2030,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020], label : 'Test C'},

  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
