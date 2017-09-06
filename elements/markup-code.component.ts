import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-markup-code',
  template:
    '<gg-markup-content class="text-code" [content]="content"></gg-markup-content>',
})
export class MarkupCodeComponent {
  @Input() content: Element;
}
