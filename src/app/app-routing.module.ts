import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthRennesComponent } from './birth-rennes/birth-rennes.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component'
import { DataTableComponent } from './data-table/data-table.component';

// Ici on définie nos routes
const routes: Routes = [
  // bar-chart : route par défaut, page d'accueil
  { path: '',   redirectTo: '/bar-chart', pathMatch: 'full' },
  { path: 'birth-rennes', component: BirthRennesComponent},
  { path: 'bar-chart', component: MyBarChartComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'help', component: HelpComponent},
  { path: 'data-table', component: DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
