import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DolRoutingModule } from './dol-routing.module';
import { DolPage } from './dol.page';


@NgModule({
  declarations: [
    DolPage
  ],
  imports: [
    CommonModule,
    DolRoutingModule
  ]
})
export class DolModule { }
