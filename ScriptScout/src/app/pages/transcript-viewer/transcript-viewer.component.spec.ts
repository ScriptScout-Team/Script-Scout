import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptViewerComponent } from './transcript-viewer.component';

describe('TranscriptViewerComponent', () => {
  let component: TranscriptViewerComponent;
  let fixture: ComponentFixture<TranscriptViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscriptViewerComponent]
    });
    fixture = TestBed.createComponent(TranscriptViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
