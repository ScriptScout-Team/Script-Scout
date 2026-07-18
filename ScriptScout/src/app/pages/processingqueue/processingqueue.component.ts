import { Component } from '@angular/core';

@Component({
  selector: 'app-processingqueue',
  templateUrl: './processingqueue.component.html',
  styleUrls: ['./processingqueue.component.css']
})
export class ProcessingqueueComponent {

  queue = [
    {
      video: 'AI Revolution in Healthcare.mp4',
      user: 'Jagruti',
      status: 'Processing',
      progress: 25,
      time: '10:15 AM'
    },
    {
      video: 'Angular Tutorial.mp4',
      user: 'Sai Kiran',
      status: 'Processing',
      progress: 55,
      time: '10:32 AM'
    },
    {
      video: 'Machine Learning Basics.mp4',
      user: 'Rahul',
      status: 'Completed',
      progress: 100,
      time: '09:50 AM'
    },
    {
      video: 'Cloud Computing.mp4',
      user: 'Anjali',
      status: 'Queued',
      progress: 0,
      time: '11:05 AM'
    },
    {
      video: 'Data Science Overview.mp4',
      user: 'Kiran',
      status: 'Processing',
      progress: 80,
      time: '11:20 AM'
    }
  ];

  constructor() {}

  refreshQueue(): void {
    alert('Processing Queue Refreshed!');
  }

  cancel(item: any): void {

    const confirmCancel = confirm(
      `Cancel processing for "${item.video}"?`
    );

    if (confirmCancel) {

      item.status = 'Cancelled';
      item.progress = 0;

      alert('Processing Cancelled.');

    }

  }

}
