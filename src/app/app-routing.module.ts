import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthRennesComponent } from './birth-rennes/birth-rennes.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '',   redirectTo: '/bar-chart', pathMatch: 'full' },
  { path: 'birth-rennes', component: BirthRennesComponent},
  { path: 'bar-chart', component: MyBarChartComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
