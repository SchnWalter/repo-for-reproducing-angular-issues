import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsdaCrudService } from './services/usda-crud.service';
import { UsdaStateService } from './services/usda-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkUsdaModule {
  static forRoot(): ModuleWithProviders<ExampleSdkUsdaModule> {
    return {
      ngModule: ExampleSdkUsdaModule,
      providers: [
        UsdaCrudService,
        UsdaStateService,
      ],
    };
  }
}
