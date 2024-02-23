import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComComponent } from './dynamic-com.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { CardComComponent } from './card-com/card-com.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DynamicComComponent,
  },
];

@NgModule({
  declarations: [
    DynamicComComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    CardComComponent,
    AdBannerComponent,
  ],
  imports: [NgComponentOutlet, AsyncPipe, RouterModule.forChild(routes)],
  providers: [],
})
export class DynamicComModule {}
