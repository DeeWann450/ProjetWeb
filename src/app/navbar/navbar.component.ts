import { Component, OnInit } from '@angular/core';
import { InputYearService } from '../input-year.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm = new FormGroup({
    inputYear: new FormControl('', [
      Validators.required,
      Validators.min(1986),
      Validators.max(2019)
    ])
  })

  constructor(private inputYearService:InputYearService) { 
  }

  ngOnInit(): void {
  }

  onClickMe(value) {
    this.inputYearService.inputYear = value;
  }
}
