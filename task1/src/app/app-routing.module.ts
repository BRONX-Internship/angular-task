import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { DynamicComComponent } from './components/dynamic-com/dynamic-com.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'card-detail',
    component: CardDetailComponent,
  },
  {
    path: 'content-pro',
    loadChildren: () =>
      import('./components/content-projection/content-projection.module').then(
        (m) => m.ContentProjectionModule
      ),
  },
  {
    path: 'dynamic',
    loadChildren: () =>
      import('./components/dynamic-com/dynamic-com.module').then(
        (m) => m.DynamicComModule
      ),
  },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', redirectTo: '/product' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
