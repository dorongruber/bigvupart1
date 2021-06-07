import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  isLoadingimg = false;
  isLoadingTitle = false;
  imgSubscription = new Subscription();
  imgurl = null;
  title = null;
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.imageService.changedImgUrl
    .subscribe(res => {
      this.isLoadingimg = !this.isLoadingimg;
      // console.log('changer image url -> ', res);
      this.imgurl = res;
      setTimeout(() => {
        this.isLoadingimg = !this.isLoadingimg;
      }, 1000);
    });

    this.imageService.changedTitle
    .subscribe(res => {
      this.isLoadingTitle = !this.isLoadingTitle;
      this.title = res;
      // console.log('title change -> ', this.title);
      setTimeout(() => {
        this.isLoadingTitle = !this.isLoadingTitle;
      }, 1000);
    });
  }

}
