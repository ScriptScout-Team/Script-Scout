import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: false,
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef<HTMLVideoElement>;

  activeChapter = 0;

  chapters = [
    {
      title: 'Introduction to AI in Healthcare',
      start: 0
    },
    {
      title: 'How AI is Transforming Diagnosis',
      start: 90
    },
    {
      title: 'AI in Medical Imaging',
      start: 391
    },
    {
      title: 'AI for Patient Monitoring',
      start: 616
    },
    {
      title: 'Challenges & Ethics',
      start: 946
    },
    {
      title: 'Future of AI in Healthcare',
      start: 1231
    }
  ];

  playChapter(index: number): void {

    this.activeChapter = index;

    const video = this.videoPlayer.nativeElement;

    video.currentTime = this.chapters[index].start;

    video.play();

  }

  playVideo(): void {
    this.videoPlayer.nativeElement.play();
  }

  pauseVideo(): void {
    this.videoPlayer.nativeElement.pause();
  }

  stopVideo(): void {

    const video = this.videoPlayer.nativeElement;

    video.pause();

    video.currentTime = 0;

  }

}
