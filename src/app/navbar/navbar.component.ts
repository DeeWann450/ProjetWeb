import { Component, OnInit } from '@angular/core';
import { InputYearService } from '../input-year.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm = new FormGroup({
    inputYear: new FormControl('')
  })

  constructor(private inputYearService:InputYearService) { 
  }

  ngOnInit(): void {
  }

  onClickMe(value) {
    this.inputYearService.inputYear = value;
  }
  
  get inputYear() {
    return this.searchForm.get('inputYear');
  }
}
