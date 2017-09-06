import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-user',
  template: `
     <gg-username-link *ngIf="!content.firstChild" [userid]="content.getAttribute('userid')"></gg-username-link>
	  <gg-user-link-custom *ngIf="content.firstChild" [userid]="content.getAttribute('userid')">
       <gg-markup-content [content]="content"></gg-markup-content>
    </gg-user-link-custom>`,
})
export class MarkupUserComponent {
  @Input() content: any;

  ngOnInit() {}
}
