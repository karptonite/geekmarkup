import { NgModule } from '@angular/core';
import { EssentialItemsModule } from '@geek/essential-items/essential-items.module';
import { ImageModule } from '@geek/geekimage/image/image.module';
import { MarkupAnchorComponent } from '@geek/geekmarkup/elements/markup-anchor.component';
import { MarkupBreakComponent } from '@geek/geekmarkup/elements/markup-break.component';
import { MarkupComponentFactoryResolverService } from '@geek/geekmarkup/markup-component-factory-resolver.service';
import { MarkupContentComponent } from '@geek/geekmarkup/markup-content.component';
import { MarkupGeekimageComponent } from '@geek/geekmarkup/elements/markup-geekimage.component';
import { MarkupHrComponent } from '@geek/geekmarkup/elements/markup-hr.component';
import { MarkupImgComponent } from '@geek/geekmarkup/elements/markup-img.component';
import { MarkupItemLinkCustomComponent } from '@geek/geekmarkup/elements/markup-item-link-custom.component';
import { MarkupItemLinkComponent } from '@geek/geekmarkup/elements/markup-item-link.component';
import { MarkupMp3Component } from '@geek/geekmarkup/elements/markup-mp3.component';
import { MarkupPollComponent } from '@geek/geekmarkup/elements/markup-poll.component';
import { MarkupQuoteComponent } from '@geek/geekmarkup/elements/markup-quote.component';
import { MarkupSoundcloudComponent } from '@geek/geekmarkup/elements/markup-soundcloud.component';
import { MarkupTextComponent } from '@geek/geekmarkup/elements/markup-text.component';
import { MarkupTweetComponent } from '@geek/geekmarkup/elements/markup-tweet.component';
import { MarkupVimeoComponent } from '@geek/geekmarkup/elements/markup-vimeo.component';
import { MarkupYoutubeComponent } from '@geek/geekmarkup/elements/markup-youtube.component';
import { SharedModule } from '@geek/shared/shared.module';
import { MarkupComponent } from './markup.component';
import { MarkupMicrobadgeComponent } from '@geek/geekmarkup/elements/markup-microbadge.component';
import { MicrobadgesModule } from '@geek/microbadges/microbadges.module';
import { MarkupUserComponent } from '@geek/geekmarkup/elements/markup-user.component';
import { UsernameLinkModule } from '@geek/user/username-link/username-link.module';
import { UserLinkCustomModule } from '@geek/user/user-link-custom/user-link-custom.module';
import { MarkupStyledComponent } from '@geek/geekmarkup/elements/markup-styled.component';
import { MarkupStyledDivComponent } from '@geek/geekmarkup/elements/markup-styled-div.component';
import { MarkupCodeComponent } from '@geek/geekmarkup/elements/markup-code.component';

@NgModule({
  imports: [
    SharedModule,
    EssentialItemsModule,
    ImageModule,
    MicrobadgesModule,
    UsernameLinkModule,
    UserLinkCustomModule,
  ],
  providers: [MarkupComponentFactoryResolverService],
  declarations: [
    MarkupAnchorComponent,
    MarkupBreakComponent,
    MarkupCodeComponent,
    MarkupComponent,
    MarkupContentComponent,
    MarkupGeekimageComponent,
    MarkupHrComponent,
    MarkupImgComponent,
    MarkupItemLinkComponent,
    MarkupItemLinkCustomComponent,
    MarkupMicrobadgeComponent,
    MarkupMp3Component,
    MarkupQuoteComponent,
    MarkupPollComponent,
    MarkupSoundcloudComponent,
    MarkupStyledComponent,
    MarkupStyledDivComponent,
    MarkupTextComponent,
    MarkupTweetComponent,
    MarkupUserComponent,
    MarkupVimeoComponent,
    MarkupYoutubeComponent,
  ],
  exports: [MarkupComponent],
  entryComponents: [
    MarkupAnchorComponent,
    MarkupBreakComponent,
    MarkupCodeComponent,
    MarkupGeekimageComponent,
    MarkupHrComponent,
    MarkupImgComponent,
    MarkupItemLinkComponent,
    MarkupItemLinkCustomComponent,
    MarkupMicrobadgeComponent,
    MarkupMp3Component,
    MarkupQuoteComponent,
    MarkupPollComponent,
    MarkupSoundcloudComponent,
    MarkupStyledComponent,
    MarkupStyledDivComponent,
    MarkupTextComponent,
    MarkupTweetComponent,
    MarkupUserComponent,
    MarkupVimeoComponent,
    MarkupYoutubeComponent,
  ],
})
export class MarkupModule {}
