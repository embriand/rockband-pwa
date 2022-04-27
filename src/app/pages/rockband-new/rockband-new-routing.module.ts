import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockbandNewPage } from './rockband-new.page';

const routes: Routes = [
  {
    path: '',
    component: RockbandNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockbandNewPageRoutingModule {}
