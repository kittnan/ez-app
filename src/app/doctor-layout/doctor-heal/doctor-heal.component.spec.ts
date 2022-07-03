import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHealComponent } from './doctor-heal.component';

describe('DoctorHealComponent', () => {
  let component: DoctorHealComponent;
  let fixture: ComponentFixture<DoctorHealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorHealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorHealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
