import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthRennesComponent } from './birth-rennes/birth-rennes.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

const routes: Routes = [
  { path: '', component: BirthRennesComponent},
  { path: 'bar-chart', component: MyBarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
