import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    //因為 appTimes 下在 <ul> 內，所以 viewContainer 指的是 <ul>
    //第一步先把 viewContainer 內的 HTML 元素清空
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      //於 viewContainer 內創造新的 HTML 元素
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
        color: 'purple',
      });
    }
  }
}
