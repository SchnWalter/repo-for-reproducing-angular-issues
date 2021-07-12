import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhsRoutingModule } from './dhs-routing.module';
import { DhsPage } from './dhs.page';


@NgModule({
  declarations: [
    DhsPage
  ],
  imports: [
    CommonModule,
    DhsRoutingModule
  ]
})
export class DhsModule { }
