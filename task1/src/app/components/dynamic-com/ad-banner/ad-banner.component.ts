import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit {
  private adList: any[] = [];
  private currentAdIndex = 0;

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.adList = this.adService.getAds();
  }

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  displayNextAd() {
    this.currentAdIndex++;
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }
}
