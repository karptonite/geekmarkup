import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gg-markup-img',
  template: `<img 
     [style.display]="block ? 'block': 'inherit'" 
     style="max-height:600px; max-width: 800px;" 
     *ngIf="src" [src]="src" [alt]="alt" />`,
})
export class MarkupImgComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  public src;
  public alt;
  public block = false;

  @Input() content: any;

  public ngOnInit() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.content.getAttribute('src'),
    );
    this.alt = this.content.getAttribute('alt');
    this.block = this.content.getAttribute('block');
  }
}
