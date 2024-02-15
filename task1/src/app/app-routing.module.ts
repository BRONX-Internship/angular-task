import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'card-detail',
    component: CardDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
