import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gg-markup-code',
  template:
    '<gg-markup-content class="text-code" [content]="content"></gg-markup-content>',
})
export class MarkupCodeComponent {
  @Input() content: any;
}
