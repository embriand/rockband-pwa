import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { RockbandNewPageRoutingModule } from './rockband-new-routing.module';

import { RockbandNewPage } from './rockband-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockbandNewPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RockbandNewPage]
})
export class RockbandNewPageModule {}
