import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-markup-poll',
  // Poll component will go here, but is not yet implemented
  template: `<div class="alert alert-warning">Sorry, polls are not yet implemented in the new comments system</div>`,
})
export class MarkupPollComponent {
  @Input() content: Element;
}
