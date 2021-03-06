import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date; // to jest przeciez input debilu!!!
  private paragraph; //p

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }
  @HostListener('mouseenter')
  mouseenter() {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }
  @HostListener('mouseleave')
  mouseleave() {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
