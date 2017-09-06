import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gg-markup-mp3',
  template: `
   <object 
      type="application/x-shockwave-flash" 
      width="400" 
      height="16" 
      [data]="url">
      <param name="movie" [value]="url">
   </object>
  `,
})
export class MarkupMp3Component implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  public url;

  @Input() content: any;

  public ngOnInit() {
    const url = encodeURIComponent(this.content.getAttribute('src'));
    const title = encodeURIComponent(this.content.getAttribute('title'));
    const src = `https://boardgamegeek.com/xspf_player_slim.swf?song_url=${url}&song_title=${title}&player_title=${title}`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(src);
  }
}
