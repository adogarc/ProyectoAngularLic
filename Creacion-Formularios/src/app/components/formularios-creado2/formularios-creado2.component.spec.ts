import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosCreado2Component } from './formularios-creado2.component';

describe('FormulariosCreado2Component', () => {
  let component: FormulariosCreado2Component;
  let fixture: ComponentFixture<FormulariosCreado2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosCreado2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosCreado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
