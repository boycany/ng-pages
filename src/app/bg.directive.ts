import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBg]',
})
export class BgDirective {
  constructor(private element: ElementRef) {}
  @Input('appBg') set backgroundColor(color: string) {
    // .nativeElement 取得真正的 html element
    this.element.nativeElement.style.backgroundColor = color;
  }
}
