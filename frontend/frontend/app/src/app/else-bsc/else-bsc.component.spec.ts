import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseBSCComponent } from './else-bsc.component';

describe('ElseBSCComponent', () => {
  let component: ElseBSCComponent;
  let fixture: ComponentFixture<ElseBSCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElseBSCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElseBSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
