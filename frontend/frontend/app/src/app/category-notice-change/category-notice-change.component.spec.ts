import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNoticeChangeComponent } from './category-notice-change.component';

describe('CategoryNoticeChangeComponent', () => {
  let component: CategoryNoticeChangeComponent;
  let fixture: ComponentFixture<CategoryNoticeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryNoticeChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNoticeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
