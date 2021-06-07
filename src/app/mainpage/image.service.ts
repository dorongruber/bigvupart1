import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ImageFormat } from './image.model';

const IMGURL = 'https://bigvu-interviews-assets.s3.amazonaws.com/presenters.json';
const url = 'http://localhost:4200/';
@Injectable({providedIn: 'root'})
export class ImageService {
  changedImgUrl = new Subject<string>();
  image: string;
  changedTitle = new Subject<string>();
  title: string;
  imageList = new Subject<ImageFormat[]>();
  constructor(
    private http: HttpClient
  ) {}

  getImagesList() {
    const list: ImageFormat[] = [];
    this.http.get<ImageFormat[]>(url + 'api').pipe(tap(resdata => {
      resdata.forEach(data => {
        list.push(new ImageFormat(data.name, data.value));
      });
    })).subscribe(() => {
      this.imageList.next(list.slice());
    });
  }

  onChangeImage(imageurl: string) {
    this.image = imageurl;
    console.log('onChangeImage -> ', this.image);
    this.changedImgUrl.next(this.image);
  }

  onChangedTitle(t: string) {
    this.title = t;
    this.changedTitle.next(this.title);
  }
}
