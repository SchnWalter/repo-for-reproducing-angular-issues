import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoeCrudService } from './services/doe-crud.service';
import { DoeStateService } from './services/doe-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkDoeModule {
  static forRoot(): ModuleWithProviders<ExampleSdkDoeModule> {
    return {
      ngModule: ExampleSdkDoeModule,
      providers: [
        DoeCrudService,
        DoeStateService,
      ],
    };
  }
}
