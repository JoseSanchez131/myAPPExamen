import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertarPageRoutingModule } from './insertar-routing.module';

import { InsertarPage } from './insertar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertarPageRoutingModule
  ],
  declarations: [InsertarPage]
})
export class InsertarPageModule {}
