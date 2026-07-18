import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingqueueComponent } from './processingqueue.component';

describe('ProcessingqueueComponent', () => {
  let component: ProcessingqueueComponent;
  let fixture: ComponentFixture<ProcessingqueueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingqueueComponent]
    });
    fixture = TestBed.createComponent(ProcessingqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
