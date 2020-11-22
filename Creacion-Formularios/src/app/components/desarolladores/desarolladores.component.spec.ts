import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarolladoresComponent } from './desarolladores.component';

describe('DesarolladoresComponent', () => {
  let component: DesarolladoresComponent;
  let fixture: ComponentFixture<DesarolladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarolladoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarolladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
