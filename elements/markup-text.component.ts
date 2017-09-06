import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-markup-text',
  template: '{{content?.nodeValue}}',
})
export class MarkupTextComponent {
  @Input() content: Node;
}
