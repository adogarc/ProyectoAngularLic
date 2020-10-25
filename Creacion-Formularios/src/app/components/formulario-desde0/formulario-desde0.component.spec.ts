import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDesde0Component } from './formulario-desde0.component';

describe('FormularioDesde0Component', () => {
  let component: FormularioDesde0Component;
  let fixture: ComponentFixture<FormularioDesde0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDesde0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDesde0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
