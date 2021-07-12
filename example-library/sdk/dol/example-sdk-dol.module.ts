import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DolCrudService } from './services/dol-crud.service';
import { DolStateService } from './services/dol-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkDolModule {
  static forRoot(): ModuleWithProviders<ExampleSdkDolModule> {
    return {
      ngModule: ExampleSdkDolModule,
      providers: [
        DolCrudService,
        DolStateService,
      ],
    };
  }
}
