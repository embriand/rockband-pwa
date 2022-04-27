import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockbandListPageRoutingModule } from './rockband-list-routing.module';

import { RockbandListPage } from './rockband-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockbandListPageRoutingModule
  ],
  declarations: [RockbandListPage]
})
export class RockbandListPageModule {}
