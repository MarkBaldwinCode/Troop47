import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutmasterMinuteComponent } from './scoutmaster-minute.component';

describe('ScoutmasterMinuteComponent', () => {
  let component: ScoutmasterMinuteComponent;
  let fixture: ComponentFixture<ScoutmasterMinuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoutmasterMinuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutmasterMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
