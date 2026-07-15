import { Injectable } from '@angular/core';
import { Video } from '../models/video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {


  videos: Video[] = [];

  constructor() { }
  addVideo(video: Video) {

    this.videos.push(video);

  }
  getVideos() {

    return this.videos;

  }

}
