import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gg-markup-geekimage',
  template: `
    <gg-geekimage [size]="size" [imageid]="id" [block]="block" link="image"></gg-geekimage>
    `,
})
export class MarkupGeekimageComponent implements OnInit {
  public id;
  public size;
  public block: string = null;

  @Input() content: Element;

  public ngOnInit() {
    this.id = this.content.getAttribute('id');
    this.size = this.content.getAttribute('size');
    this.block = this.content.getAttribute('block');
  }
}
