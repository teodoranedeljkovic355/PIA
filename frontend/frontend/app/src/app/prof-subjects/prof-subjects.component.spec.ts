import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSubjectsComponent } from './prof-subjects.component';

describe('ProfSubjectsComponent', () => {
  let component: ProfSubjectsComponent;
  let fixture: ComponentFixture<ProfSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
