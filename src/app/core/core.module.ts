import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatherComponent } from './heather/heather.component';
import { FootherComponent } from './foother/foother.component';



@NgModule({
  declarations: [
    HeatherComponent,
    FootherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeatherComponent, FootherComponent]
})
export class CoreModule { }
