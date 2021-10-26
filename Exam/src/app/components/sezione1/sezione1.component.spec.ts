import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sezione1Component } from './sezione1.component';

describe('Sezione1Component', () => {
  let component: Sezione1Component;
  let fixture: ComponentFixture<Sezione1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sezione1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sezione1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
