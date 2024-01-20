import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorVetFundComponent } from './honor-vet-fund.component';

describe('HonorVetFundComponent', () => {
  let component: HonorVetFundComponent;
  let fixture: ComponentFixture<HonorVetFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorVetFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorVetFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
