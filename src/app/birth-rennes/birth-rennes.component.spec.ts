import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthRennesComponent } from './birth-rennes.component';

describe('BirthRennesComponent', () => {
  let component: BirthRennesComponent;
  let fixture: ComponentFixture<BirthRennesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthRennesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthRennesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
