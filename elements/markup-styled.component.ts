import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gg-markup-styled',
  template: `
    <gg-markup-content
      [ngStyle]="style"
      [content]="content"></gg-markup-content>
  `,
})
export class MarkupStyledComponent implements OnInit {
  @Input() content: Element;

  private style;
  private styles = {
    u: { 'text-decoration': 'underline' },
    i: { 'font-style': 'italic' },
    b: { 'font-weight': 'bold' },
    st: { 'text-decoration': 'line-through' },
    bgcolor: () => ({ 'background-color': this.content.getAttribute('color') }),
    color: () => ({ color: this.content.getAttribute('color') }),
    'font-size': () => ({
      'font-size': this.content.getAttribute('size') + 'pt',
    }),
  };

  public ngOnInit() {
    if (typeof this.styles[this.content.nodeName] === 'function') {
      this.style = this.styles[this.content.nodeName]();
    } else {
      this.style = this.styles[this.content.nodeName];
    }
  }
}
