import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnotherPageComponent } from './another-page/another-page.component';

import { SecondRoutingModule } from './second-routing.module';

@NgModule({
  declarations: [AnotherPageComponent],
  imports: [
    CommonModule,
    SecondRoutingModule,
  ],
})
export class SecondModule {
}
