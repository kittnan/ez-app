import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionsComponent } from './receptions.component';

describe('ReceptionsComponent', () => {
  let component: ReceptionsComponent;
  let fixture: ComponentFixture<ReceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
