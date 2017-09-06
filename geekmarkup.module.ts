import { NgModule } from '@angular/core';
import { EssentialItemsModule } from '@geek/essential-items/essential-items.module';
import { ImageModule } from '@geek/geekimage/image/image.module';
import { MarkupAnchorComponent } from '@geek/geekmarkup/markup-anchor.component';
import { MarkupBreakComponent } from '@geek/geekmarkup/markup-break.component';
import { MarkupComponentFactoryResolverService } from '@geek/geekmarkup/markup-component-factory-resolver.service';
import { MarkupContentComponent } from '@geek/geekmarkup/markup-content.component';
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
import { SharedModule } from '@geek/shared/shared.module';
import { MarkupComponent } from './markup.component';
import { MarkupMicrobadgeComponent } from '@geek/geekmarkup/markup-microbadge.component';
import { MicrobadgesModule } from '@geek/microbadges/microbadges.module';
import { MarkupUserComponent } from '@geek/geekmarkup/markup-user.component';
import { UsernameLinkModule } from '@geek/user/username-link/username-link.module';
import { UserLinkCustomModule } from '@geek/user/user-link-custom/user-link-custom.module';
import { MarkupStyledComponent } from '@geek/geekmarkup/markup-styled.component';
import { MarkupStyledDivComponent } from '@geek/geekmarkup/markup-styled-div.component';
import { MarkupCodeComponent } from '@geek/geekmarkup/markup-code.component';

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
