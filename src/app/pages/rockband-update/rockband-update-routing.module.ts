import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockbandUpdatePage } from './rockband-update.page';

const routes: Routes = [
  {
    path: '',
    component: RockbandUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockbandUpdatePageRoutingModule {}
