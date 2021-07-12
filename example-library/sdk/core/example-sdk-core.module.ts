import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { REQUEST_SERVICE_PROVIDER } from './services/request.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkCoreModule {
  static forRoot(): ModuleWithProviders<ExampleSdkCoreModule> {
    return {
      ngModule: ExampleSdkCoreModule,
      providers: [
        REQUEST_SERVICE_PROVIDER,
      ],
    };
  }
}
