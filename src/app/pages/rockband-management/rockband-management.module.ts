import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockbandManagementPageRoutingModule } from './rockband-management-routing.module';

import { RockbandManagementPage } from './rockband-management.page';

import { RockbandInfinitscrollListComponent } from '../../components/rockband-infinitscroll-list/rockband-infinitscroll-List.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockbandManagementPageRoutingModule
  ],
  declarations: [RockbandManagementPage, RockbandInfinitscrollListComponent]
})
export class RockbandManagementPageModule {}
