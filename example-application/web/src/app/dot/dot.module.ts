import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotRoutingModule } from './dot-routing.module';
import { DotPage } from './dot.page';


@NgModule({
  declarations: [
    DotPage
  ],
  imports: [
    CommonModule,
    DotRoutingModule
  ]
})
export class DotModule { }
