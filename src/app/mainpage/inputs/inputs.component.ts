import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageFormat } from '../image.model';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @ViewChild('titleInput', {static: true}) titleInput: ElementRef;
  imgList: ImageFormat[] = [];
  currentImage = 'Enter Image';
  listFlag = false;

  debonceTitle = [];
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {

    (this.titleInput.nativeElement as HTMLElement).addEventListener('keyup', this.debounce((debouncearray: KeyboardEvent[]) => {
      console.log('addEventListener event -> ', debouncearray[0].key);
      const templist = [];
      for (let i = 0; i < Object.keys(debouncearray).length; i++) {
        templist.push(debouncearray[i].key);
      }
      const title = templist.join('');
      console.log('temp list => ', title, title.length);
      this.imageService.onChangedTitle(title);
    }, 1000));
    this.imageService.imageList
    .subscribe(resList => {
      this.imgList = resList;
    });
    if (this.imgList.length === 0) {
      this.imageService.getImagesList();
    }

  }

  onImageSelect(imageurl: string) {
    this.currentImage = imageurl;
    console.log('selected image -> ', this.currentImage);
    this.imageService.onChangeImage(this.currentImage);
    this.onImagetagClick();
  }

  onImagetagClick() {
    this.listFlag = !this.listFlag;
  }

  onTitleTyping(event: KeyboardEvent) {
    console.log(event);
  }

  debounce = (func, wait) => {
    let timeout;
    return (arg) => {
      // console.log('args => ', arg.key);
      if (arg.key === 'Backspace') {
        this.debonceTitle.pop();
      } else if (arg.key !== 'Shift') {
        this.debonceTitle.push(arg);
      }
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func(this.debonceTitle);
      }, wait);
    };
  }

}
