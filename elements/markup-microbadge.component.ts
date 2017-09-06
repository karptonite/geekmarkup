import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-markup-microbadge',
  template: `<gg-microbadge [badgeid]="content.getAttribute('id')"></gg-microbadge>`,
  styleUrls: ['./markup-quote.component.scss'],
})
export class MarkupMicrobadgeComponent {
  @Input() content: Element;
}
