import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective  implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const li = this.el.nativeElement; // ten a ktorym działa derektywa
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/check.png)');
    this.renderer.setStyle(li, 'background-color', 'green');
  }
}
