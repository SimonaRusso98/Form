import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sezione2TypeComponent } from './sezione2-type.component';

describe('Sezione2TypeComponent', () => {
  let component: Sezione2TypeComponent;
  let fixture: ComponentFixture<Sezione2TypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sezione2TypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sezione2TypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
