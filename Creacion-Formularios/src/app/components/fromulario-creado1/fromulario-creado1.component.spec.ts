import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromularioCreado1Component } from './fromulario-creado1.component';

describe('FromularioCreado1Component', () => {
  let component: FromularioCreado1Component;
  let fixture: ComponentFixture<FromularioCreado1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromularioCreado1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromularioCreado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
