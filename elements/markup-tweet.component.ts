import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { ggTwitter } from '@geek/core/twitter.token';

@Component({
  selector: 'gg-markup-tweet',
  template: '',
})
export class MarkupTweetComponent implements OnInit {
  constructor(
    @Inject(ggTwitter) private twitter,
    private element: ElementRef,
  ) {}

  @Input() content: Element;

  public ngOnInit() {
    const nativeElement = this.element.nativeElement;
    this.twitter.ready(twitter => {
      twitter.widgets.createTweet(
        this.content.getAttribute('id'),
        nativeElement,
        {},
      );
    });
  }
}
