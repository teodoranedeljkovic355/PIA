import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsSubjectComponent } from './informations-subject.component';

describe('InformationsSubjectComponent', () => {
  let component: InformationsSubjectComponent;
  let fixture: ComponentFixture<InformationsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
