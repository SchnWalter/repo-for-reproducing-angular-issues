import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhsCrudService } from './services/dhs-crud.service';
import { DhsStateService } from './services/dhs-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkDhsModule {
  static forRoot(): ModuleWithProviders<ExampleSdkDhsModule> {
    return {
      ngModule: ExampleSdkDhsModule,
      providers: [
        DhsCrudService,
        DhsStateService,
      ],
    };
  }
}
