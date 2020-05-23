import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirthRennesComponent } from './birth-rennes/birth-rennes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'contact', component : NavbarComponent},
  {path: 'aide', component : NavbarComponent},
  {path: '', component : NavbarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BirthRennesComponent,
    NavbarComponent,
    MyBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
