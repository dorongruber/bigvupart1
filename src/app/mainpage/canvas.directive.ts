import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCanvasBorder]'
})
export class CanvasBorderDirective implements OnInit, OnChanges {
  defaultColor = 'white';
  @Input()highlightColor: string;
  @HostBinding('style.backgroundColor')backgroundColor: string;
  @HostBinding('style.width')backgroundWidth = '680px';
  @HostBinding('style.height')backgroundHeight = '400px';
  @HostBinding('style.display')backgroundDisplay = 'flex';
  @HostBinding('style.padding')backgroundPadding = '20px';
  @HostBinding('style.boxSizing')backgroundboxSizing = 'border-box';
  @HostBinding('style.boxShadow')boxShadow = '0px 0px 10px 4px black';
  @HostBinding('style.borderRadius')borderRadius = '15px';
  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.highlightColor;
  }

  ngOnChanges() {
    this.backgroundColor = this.highlightColor;
    // console.log('this.backgroundColor => ', this.backgroundColor);
  }
}
