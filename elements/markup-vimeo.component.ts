import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gg-markup-youtube',
  template: `
    <iframe 
       [src]="url" 
       width="640" 
       height="385" 
       frameborder="0" 
       webkitAllowFullScreen 
       mozallowfullscreen 
       allowFullScreen></iframe> 
  `,
})
export class MarkupVimeoComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  public url;

  @Input() content: any;

  public ngOnInit() {
    const url = `https://player.vimeo.com/video/${this.content.getAttribute(
      'video',
    )}?title=0&amp;byline=0&amp;portrait=0`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
