import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {

  title = '';
  category = '';
  description = '';
  fileName = '';

  constructor(
      private videoService: VideoService,
      private router: Router
  ) {}

  onFileSelected(event: any){

      const file = event.target.files[0];

      if(file){

        this.fileName = file.name;

      }

  }

  uploadVideo(){

      const video: Video = {

          id: Date.now(),

          title: this.title,

          category: this.category,

          description: this.description,

          fileName: this.fileName,

          uploadDate: new Date().toLocaleDateString()

      };

      this.videoService.addVideo(video);

      alert("Video Uploaded Successfully");

      this.router.navigate(['/video-list']);

  }

}
