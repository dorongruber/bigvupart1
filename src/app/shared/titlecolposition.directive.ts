import { Directive, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitleColPosition]'
})
export class TitlecolpositionDirective implements OnInit, OnChanges {
  @Input()colInputWidth: string;
  defaultColwidth = '100%';
  @HostBinding('style.width')colWidth: string;

  constructor() {}

  ngOnInit() {
    this.colWidth = this.defaultColwidth;
  }

  ngOnChanges() {
    this.colWidth = this.colInputWidth;
  }
}
