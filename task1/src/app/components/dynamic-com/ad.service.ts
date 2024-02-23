import { Injectable, Type, Input } from '@angular/core';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { CardComComponent } from './card-com/card-com.component';

interface AddType {
  component: Type<any>;
  inputs: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      {
        component: HeroProfileComponent,
        inputs: { name: 'Dr. IQ', bio: 'Smart as they come' },
      },
      {
        component: HeroProfileComponent,
        inputs: { name: 'Bombasto', bio: 'Brave as they come' },
      },
      {
        component: HeroJobAdComponent,
        inputs: {
          headline: 'Hiring for several positions',
          body: 'Submit your resume today!',
        },
      },
      {
        component: HeroJobAdComponent,
        inputs: {
          headline: 'Openings in all departments',
          body: 'Apply today',
        },
      },
      {
        component: CardComComponent,
        inputs: {
          product: {
            id: 1,
            name: 'Jean',
            price: 10,
            description: 'Description of Product 1',
            imageUrl:
              'https://plus.unsplash.com/premium_photo-1663932464494-71bee85afe5b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
        },
      },
    ] as AddType[];
  }
}
