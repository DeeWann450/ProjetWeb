import { Component, OnInit } from '@angular/core';
import { InputYearService } from '../input-year.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private inputYearService:InputYearService) { 
  }

  ngOnInit(): void {
  }

  onClickMe(value) {
    this.inputYearService.inputYear = value;
  }
}
