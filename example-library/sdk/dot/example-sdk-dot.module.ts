import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotCrudService } from './services/dot-crud.service';
import { DotStateService } from './services/dot-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkDotModule {
  static forRoot(): ModuleWithProviders<ExampleSdkDotModule> {
    return {
      ngModule: ExampleSdkDotModule,
      providers: [
        DotCrudService,
        DotStateService,
      ],
    };
  }
}
