import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FdaRoutingModule } from './fda-routing.module';
import { FdaPage } from './fda.page';


@NgModule({
  declarations: [
    FdaPage
  ],
  imports: [
    CommonModule,
    FdaRoutingModule
  ]
})
export class FdaModule { }
