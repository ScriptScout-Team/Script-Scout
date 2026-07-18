import { Component } from '@angular/core';

@Component({
  selector: 'app-transcript-viewer',
  templateUrl: './transcript-viewer.component.html',
  styleUrls: ['./transcript-viewer.component.css']
})
export class TranscriptViewerComponent {

  activeTab: string = 'transcript';

  searchText: string = '';

  transcripts = [

    {
      time: '00:00',
      speaker: 'Host',
      text: 'Welcome everyone to today’s discussion on how Artificial Intelligence is transforming healthcare across the world.'
    },

    {
      time: '00:12',
      speaker: 'Doctor',
      text: 'AI enables faster diagnosis, improves treatment planning, and supports doctors by analyzing medical images more accurately.'
    },

    {
      time: '00:35',
      speaker: 'Host',
      text: 'Can AI completely replace healthcare professionals in the future?'
    },

    {
      time: '00:46',
      speaker: 'Doctor',
      text: 'No. AI is a decision-support tool. Human expertise, empathy, and clinical judgment remain essential.'
    },

    {
      time: '01:08',
      speaker: 'Host',
      text: 'What are some real-world applications already being used today?'
    },

    {
      time: '01:20',
      speaker: 'Doctor',
      text: 'Medical imaging, cancer detection, robotic surgery, drug discovery, personalized medicine, and virtual health assistants are widely adopted.'
    },

    {
      time: '01:55',
      speaker: 'Host',
      text: 'What challenges should organizations consider before implementing AI?'
    },

    {
      time: '02:10',
      speaker: 'Doctor',
      text: 'Privacy, ethical concerns, regulatory compliance, model bias, and data quality are the biggest challenges.'
    },

    {
      time: '02:48',
      speaker: 'Host',
      text: 'Thank you for sharing these valuable insights.'
    }

  ];

  get filteredTranscripts() {
    if (!this.searchText) {
      return this.transcripts;
    }

    return this.transcripts.filter(item =>
      item.text.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.speaker.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.time.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }

}
