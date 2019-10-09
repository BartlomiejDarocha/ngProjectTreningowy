import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appLevelBar]'
})
export class LevelBarDirective {

  // @Input()
  // private levelValue: number;
  private divBar;
  private divInside;
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) {
    this.divBar = this.render.createElement('div');
    this.divInside = this.render.createElement('div');
    this.render.setStyle(this.divBar, 'border', '1px solid black');
    this.render.setStyle(this.divBar, 'width', '100%');
    this.render.setStyle(this.divBar, 'height', '20px');
    this.render.setStyle(this.divBar, 'background-color', 'silver');
    this.render.setStyle(this.divInside, 'width', '30%');
    this.render.setStyle(this.divInside, 'height', '100%');
    this.render.setStyle(this.divInside, 'background-color', 'green');
    this.render.appendChild(this.divBar, this.divInside);

  }
  @HostListener('mouseenter')
  mouseenter() {
    this.render.appendChild(this.el.nativeElement, this.divBar);
  }
  @HostListener('mouseleave')
  mouseleave() {
    this.render.removeChild(this.el.nativeElement, this.divBar);
  }

}
