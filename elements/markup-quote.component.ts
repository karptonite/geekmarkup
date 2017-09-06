import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-markup-quote',
  template:
    '<div><gg-markup-content [content]="content"></gg-markup-content></div>',
  // Waiting on designs/styles from the designer for the quote component
  styleUrls: ['./markup-quote.component.scss'],
})
export class MarkupQuoteComponent {
  @Input() content: Element;
}
