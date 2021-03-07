import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSubjectComponent } from './info-subject.component';

describe('InfoSubjectComponent', () => {
  let component: InfoSubjectComponent;
  let fixture: ComponentFixture<InfoSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
