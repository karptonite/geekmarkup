import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gg-markup-soundcloud',
  template: `
	  <iframe 
       width="100%" 
       height="166" 
       scrolling="no" 
       frameborder="no" 
       [src]="url"> 
    </iframe>
  `,
})
export class MarkupSoundcloudComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  public url;

  @Input() content: any;

  public ngOnInit() {
    const src = encodeURIComponent(this.content.getAttribute('src'));
    const url = `https://w.soundcloud.com/player/?url=${src}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
