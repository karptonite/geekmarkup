import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-markup-item-link',
  template: `<gg-item-link [apiId]="{type: content.getAttribute('type'), id: content.getAttribute('id')}"></gg-item-link>`,
  styleUrls: ['./markup-quote.component.scss'],
})
export class MarkupItemLinkComponent {
  @Input() content: any;
}
