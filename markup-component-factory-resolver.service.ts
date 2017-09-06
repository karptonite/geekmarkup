import { ComponentFactoryResolver, Injectable } from '@angular/core';
import * as _ from 'lodash';

import { MarkupAnchorComponent } from '@geek/geekmarkup/markup-anchor.component';
import { MarkupBreakComponent } from '@geek/geekmarkup/markup-break.component';
import { MarkupGeekimageComponent } from '@geek/geekmarkup/markup-geekimage.component';
import { MarkupHrComponent } from '@geek/geekmarkup/markup-hr.component';
import { MarkupImgComponent } from '@geek/geekmarkup/markup-img.component';
import { MarkupItemLinkCustomComponent } from '@geek/geekmarkup/markup-item-link-custom.component';
import { MarkupItemLinkComponent } from '@geek/geekmarkup/markup-item-link.component';
import { MarkupMp3Component } from '@geek/geekmarkup/markup-mp3.component';
import { MarkupPollComponent } from '@geek/geekmarkup/markup-poll.component';
import { MarkupQuoteComponent } from '@geek/geekmarkup/markup-quote.component';
import { MarkupSoundcloudComponent } from '@geek/geekmarkup/markup-soundcloud.component';
import { MarkupTextComponent } from '@geek/geekmarkup/markup-text.component';
import { MarkupTweetComponent } from '@geek/geekmarkup/markup-tweet.component';
import { MarkupVimeoComponent } from '@geek/geekmarkup/markup-vimeo.component';
import { MarkupYoutubeComponent } from '@geek/geekmarkup/markup-youtube.component';
import { MarkupMicrobadgeComponent } from '@geek/geekmarkup/markup-microbadge.component';
import { MarkupUserComponent } from '@geek/geekmarkup/markup-user.component';
import { MarkupStyledComponent } from '@geek/geekmarkup/markup-styled.component';
import { MarkupStyledDivComponent } from '@geek/geekmarkup/markup-styled-div.component';
import { MarkupCodeComponent } from '@geek/geekmarkup/markup-code.component';

@Injectable()
export class MarkupComponentFactoryResolverService {
  constructor(private resolver: ComponentFactoryResolver) {}

  private componentMap = {
    '#text': MarkupTextComponent,
    a: MarkupAnchorComponent,
    q: MarkupQuoteComponent,
    b: MarkupStyledComponent,
    i: MarkupStyledComponent,
    u: MarkupStyledComponent,
    c: MarkupCodeComponent,
    'font-size': MarkupStyledComponent,
    center: MarkupStyledDivComponent,
    floatleft: MarkupStyledDivComponent,
    floatright: MarkupStyledDivComponent,
    br: MarkupBreakComponent,
    hr: MarkupHrComponent,
    clear: MarkupStyledDivComponent,
    img: MarkupImgComponent,
    geekimage: MarkupGeekimageComponent,
    user: MarkupUserComponent,
    color: MarkupStyledComponent,
    bgcolor: MarkupStyledComponent,
    st: MarkupStyledComponent,
    'item-link': MarkupItemLinkComponent,
    'item-link-custom': MarkupItemLinkCustomComponent,
    poll: MarkupPollComponent,
    youtube: MarkupYoutubeComponent,
    vimeo: MarkupVimeoComponent,
    mp3: MarkupMp3Component,
    soundcloud: MarkupSoundcloudComponent,
    tweet: MarkupTweetComponent,
    microbadge: MarkupMicrobadgeComponent,
  };

  private _getComponentFactory(name) {
    return this.componentMap[name]
      ? this.resolver.resolveComponentFactory(this.componentMap[name])
      : false;
  }

  public getComponentFactory = _.memoize(this._getComponentFactory);
}
