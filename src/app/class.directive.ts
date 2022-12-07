import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // @Input() backgroundColor: string = '';

  constructor(private element: ElementRef) {
    // console.log('Class Directive Used!');
  }

  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      console.log('key :>> ', key);
      console.log('classObj :>> ', classObj);
      if (classObj[key]) {
        console.log('this.element.nativeElement', this.element.nativeElement);
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
