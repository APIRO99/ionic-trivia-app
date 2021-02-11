import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameModalPageRoutingModule } from './game-modal-routing.module';

import { GameModalPage } from './game-modal.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GameModalPage]
})
export class GameModalPageModule {}
