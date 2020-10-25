import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCreado3Component } from './formulario-creado3.component';

describe('FormularioCreado3Component', () => {
  let component: FormularioCreado3Component;
  let fixture: ComponentFixture<FormularioCreado3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCreado3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCreado3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
