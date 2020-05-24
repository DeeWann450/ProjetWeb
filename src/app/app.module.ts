// Modules d'angular ou importés via npm
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
// Modules du site
import { AppRoutingModule } from './app-routing.module';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { AppComponent } from './app.component';
import { BirthRennesComponent } from './birth-rennes/birth-rennes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BirthRennesComponent,
    NavbarComponent,
    MyBarChartComponent,
    ContactComponent,
    HelpComponent,
    DataTableComponent
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
