import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodprodComponent } from './addfoodprod.component';

describe('AddfoodprodComponent', () => {
  let component: AddfoodprodComponent;
  let fixture: ComponentFixture<AddfoodprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfoodprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
