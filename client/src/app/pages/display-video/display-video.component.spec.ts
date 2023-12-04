import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVideoComponent } from './display-video.component';

describe('DisplayVideoComponent', () => {
  let component: DisplayVideoComponent;
  let fixture: ComponentFixture<DisplayVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayVideoComponent]
    });
    fixture = TestBed.createComponent(DisplayVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
