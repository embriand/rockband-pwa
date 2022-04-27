import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockbandListPage } from './rockband-list.page';

const routes: Routes = [
  {
    path: '',
    component: RockbandListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockbandListPageRoutingModule {}
