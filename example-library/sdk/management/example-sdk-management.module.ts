import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementCrudService } from './services/management-crud.service';
import { ManagementStateService } from './services/management-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkManagementModule {
  static forRoot(): ModuleWithProviders<ExampleSdkManagementModule> {
    return {
      ngModule: ExampleSdkManagementModule,
      providers: [
        ManagementCrudService,
        ManagementStateService,
      ],
    };
  }
}
