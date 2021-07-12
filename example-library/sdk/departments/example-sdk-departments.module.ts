import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsStateService } from './services/departments-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkDepartmentsModule {
  static forRoot(): ModuleWithProviders<ExampleSdkDepartmentsModule> {
    return {
      ngModule: ExampleSdkDepartmentsModule,
      providers: [
        DepartmentsStateService,
      ],
    };
  }
}
