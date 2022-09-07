import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasilMapComponent } from './brasil-map.component';

describe('BrasilMapComponent', () => {
  let component: BrasilMapComponent;
  let fixture: ComponentFixture<BrasilMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrasilMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
