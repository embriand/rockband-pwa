import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockbandManagementPage } from './rockband-management.page';

const routes: Routes = [
  {
    path: '',
    component: RockbandManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockbandManagementPageRoutingModule {}
