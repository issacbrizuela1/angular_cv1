import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalproyectsComponent } from './personalproyects.component';

describe('PersonalproyectsComponent', () => {
  let component: PersonalproyectsComponent;
  let fixture: ComponentFixture<PersonalproyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalproyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalproyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
