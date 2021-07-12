import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoeRoutingModule } from './doe-routing.module';
import { DoePage } from './doe.page';


@NgModule({
  declarations: [
    DoePage
  ],
  imports: [
    CommonModule,
    DoeRoutingModule
  ]
})
export class DoeModule { }
