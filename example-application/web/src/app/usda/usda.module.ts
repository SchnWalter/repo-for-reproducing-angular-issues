import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsdaRoutingModule } from './usda-routing.module';
import { UsdaPage } from './usda.page';


@NgModule({
  declarations: [
    UsdaPage
  ],
  imports: [
    CommonModule,
    UsdaRoutingModule
  ]
})
export class UsdaModule { }
