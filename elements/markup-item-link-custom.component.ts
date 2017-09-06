import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-markup-item-link-custom',
  template: `<gg-item-link-custom [apiId]="{type: content.getAttribute('type'), id: content.getAttribute('id')}">
		<gg-markup-content [content]="content"></gg-markup-content>
	</gg-item-link-custom>`,
  styleUrls: ['./markup-quote.component.scss'],
})
export class MarkupItemLinkCustomComponent {
  @Input() content: Element;
}
