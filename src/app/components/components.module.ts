import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowResultsComponent } from './show-results/show-results.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ShowResultsComponent
  ],
  exports: [
    ShowResultsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
