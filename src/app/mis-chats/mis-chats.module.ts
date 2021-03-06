import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisChatsPageRoutingModule } from './mis-chats-routing.module';

import { MisChatsPage } from './mis-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisChatsPageRoutingModule
  ],
  declarations: [MisChatsPage]
})
export class MisChatsPageModule {}
