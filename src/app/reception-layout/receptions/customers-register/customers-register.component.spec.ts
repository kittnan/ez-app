import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRegisterComponent } from './customers-register.component';

describe('CustomersRegisterComponent', () => {
  let component: CustomersRegisterComponent;
  let fixture: ComponentFixture<CustomersRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
