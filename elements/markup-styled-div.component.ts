import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gg-markup-styled',
  template: `
     <div [ngStyle]="style"><gg-markup-content [content]="content"></gg-markup-content></div>
  `,
})
export class MarkupStyledDivComponent implements OnInit {
  @Input() content: Element;

  private style;
  private styles = {
    center: {
      'text-align': 'center',
      'margin-left': 'auto',
      'margin-right': 'auto',
    },
    floatleft: {
      float: 'left',
      margin: '10px 10px 10px 0',
    },
    floatright: {
      float: 'right',
      margin: '10px 0 10px 10px',
    },
    clear: {
      clear: 'both',
    },
  };

  public ngOnInit() {
    this.style = this.styles[this.content.nodeName];
  }
}
