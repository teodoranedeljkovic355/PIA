import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiBSCComponent } from './rti-bsc.component';

describe('RtiBSCComponent', () => {
  let component: RtiBSCComponent;
  let fixture: ComponentFixture<RtiBSCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtiBSCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiBSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
