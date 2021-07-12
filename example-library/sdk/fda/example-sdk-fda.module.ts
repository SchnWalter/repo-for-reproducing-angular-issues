import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdaCrudService } from './services/fda-crud.service';
import { FdaStateService } from './services/fda-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkFdaModule {
  static forRoot(): ModuleWithProviders<ExampleSdkFdaModule> {
    return {
      ngModule: ExampleSdkFdaModule,
      providers: [
        FdaCrudService,
        FdaStateService,
      ],
    };
  }
}
