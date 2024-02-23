import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionComponent } from './content-projection.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectasComponent } from './zippy-ngprojectas/zippy-ngprojectas.component';

const routes: Routes = [
  {
    path: '',
    component: ContentProjectionComponent,
  },
];

@NgModule({
  declarations: [
    ContentProjectionComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyNgprojectasComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class ContentProjectionModule {}
