import { Directive, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitlePosition]'
})
export class TitlecontainerpositionDirective implements OnInit, OnChanges {
  @Input()titleInputJC: string;
  defaultJC = 'center';
  @HostBinding('style.justifyContent')imgjustifyContent: string;
  constructor() {}

  ngOnInit() {
    this.imgjustifyContent = this.defaultJC;
  }

  ngOnChanges() {
    this.imgjustifyContent = this.titleInputJC;
  }

}
