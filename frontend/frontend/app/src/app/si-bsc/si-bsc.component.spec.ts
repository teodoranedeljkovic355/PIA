import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiBSCComponent } from './si-bsc.component';

describe('SiBSCComponent', () => {
  let component: SiBSCComponent;
  let fixture: ComponentFixture<SiBSCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiBSCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiBSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
