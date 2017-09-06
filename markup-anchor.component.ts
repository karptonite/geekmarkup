import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gg-markup-quote',
  template:
    '<a rel="nofollow" target="_blank" [href]="href"><gg-markup-content [content]="content"></gg-markup-content></a>',
  styleUrls: ['./markup-quote.component.scss'],
})
export class MarkupAnchorComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  @Input() content: any;

  public href;

  public ngOnInit() {
    this.href = this.sanitizer.bypassSecurityTrustUrl(
      this.content.getAttribute('href'),
    );
  }
}
