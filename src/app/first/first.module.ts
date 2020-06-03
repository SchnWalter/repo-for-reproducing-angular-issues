import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { FirstRoutingModule } from './first-routing.module';
import { SimplePageComponent } from './simple-page/simple-page.component';

@NgModule({
  declarations: [SimplePageComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    MatSliderModule,
  ],
})
export class FirstModule {
}
