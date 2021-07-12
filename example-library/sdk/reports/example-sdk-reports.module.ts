import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsCrudService } from './services/reports-crud.service';
import { ReportsStateService } from './services/reports-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkReportsModule {
  static forRoot(): ModuleWithProviders<ExampleSdkReportsModule> {
    return {
      ngModule: ExampleSdkReportsModule,
      providers: [
        ReportsCrudService,
        ReportsStateService,
      ],
    };
  }
}
