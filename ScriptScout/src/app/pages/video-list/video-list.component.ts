import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  videos = [
    {
      id: 1,
      title: 'Leo Trailer',
      category: 'Movie',
      duration: '2:35',
      thumbnail: 'assets/thumb1.jpg'
    },
    {
      id: 2,
      title: 'Salaar Teaser',
      category: 'Action',
      duration: '1:58',
      thumbnail: 'assets/thumb2.jpg'
    },
    {
      id: 3,
      title: 'Pushpa 2',
      category: 'Drama',
      duration: '3:10',
      thumbnail: 'assets/thumb3.jpg'
    }
  ];

  filteredVideos() {
    return this.videos.filter(video =>
      video.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addVideo(): void {
    this.router.navigate(['/upload']);
  }

  editVideo(video: any): void {
    this.router.navigate(['/video', video.id]);
  }

  deleteVideo(video: any): void {
    const confirmDelete = confirm('Are you sure you want to delete this video?');
    if (confirmDelete) {
      this.videos = this.videos.filter(v => v.id !== video.id);
    }
  }
}
