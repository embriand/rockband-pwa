import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockbandUpdatePageRoutingModule } from './rockband-update-routing.module';

import { RockbandUpdatePage } from './rockband-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RockbandUpdatePageRoutingModule
  ],
  declarations: [RockbandUpdatePage]
})
export class RockbandUpdatePageModule {}
