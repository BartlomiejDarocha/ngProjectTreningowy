import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColorRed]'
})
export class BgColorRedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'background-color', 'red');
  }
}


