import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gg-markup-youtube',
  template:
    '<iframe *ngIf="url" width="640" height="385" [src]="url"></iframe>',
})
export class MarkupYoutubeComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  public url;

  @Input() content: any;

  public ngOnInit() {
    let url = `https://www.youtube.com/embed/${this.content.getAttribute(
      'video',
    )}`;
    if (this.content.getAttribute('showinfo').length) {
      url = `${url}?showinfo=${this.content.getAttribute('showinfo')}`;
    }
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
