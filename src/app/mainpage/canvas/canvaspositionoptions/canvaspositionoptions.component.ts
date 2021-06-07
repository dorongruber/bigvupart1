import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-canvaspositionoptions',
  templateUrl: './canvaspositionoptions.component.html',
  styleUrls: ['./canvaspositionoptions.component.css']
})
export class CanvaspositionoptionsComponent implements OnInit {
  @Output()selectedOption = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onOptionSelect(option: number) {
    console.log('option selected -> ', option);
    this.selectedOption.emit(option);
  }

}
