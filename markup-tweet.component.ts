import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { ggTwitter } from '@geek/core/twitter.token';

@Component({
  selector: 'gg-markup-tweet',
  template: '',
})
export class MarkupTweetComponent implements OnInit {
  constructor(
    @Inject(ggTwitter) private twitter,
    private element: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  @Input() content: any;

  public ngOnInit() {}

  public ngAfterViewInit() {
    const nativeElement = this.element.nativeElement;
    this.twitter.ready(twitter => {
      twitter.widgets.createTweet(
        this.content.getAttribute('id'),
        nativeElement,
        {},
      );
      // .then(() => this.changeDetectorRef.detectChanges());
    });
  }
}
