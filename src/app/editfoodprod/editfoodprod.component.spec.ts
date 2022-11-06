import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoodprodComponent } from './editfoodprod.component';

describe('EditfoodprodComponent', () => {
  let component: EditfoodprodComponent;
  let fixture: ComponentFixture<EditfoodprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfoodprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfoodprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
