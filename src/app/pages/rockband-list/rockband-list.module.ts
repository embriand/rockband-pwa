import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockbandListPageRoutingModule } from './rockband-list-routing.module';

import { RockbandListPage } from './rockband-list.page';

import { RockbandInfinitscrollListComponent } from '../../components/rockband-infinitscroll-list/rockband-infinitscroll-List.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockbandListPageRoutingModule
  ],
  declarations: [RockbandListPage, RockbandInfinitscrollListComponent]
})
export class RockbandListPageModule {}
