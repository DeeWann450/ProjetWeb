import { BirthService } from 'src/app/birth.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birth-rennes',
  templateUrl: './birth-rennes.component.html',
  styleUrls: ['./birth-rennes.component.css']
})
export class BirthRennesComponent implements OnInit {

  births;

  constructor(
    private birthService: BirthService
    ) { }

  ngOnInit(): void {
    this.births = this.birthService.getBirths();
  }

}
