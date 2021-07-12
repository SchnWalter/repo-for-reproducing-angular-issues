import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesCrudService } from './services/sales-crud.service';
import { SalesStateService } from './services/sales-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkSalesModule {
  static forRoot(): ModuleWithProviders<ExampleSdkSalesModule> {
    return {
      ngModule: ExampleSdkSalesModule,
      providers: [
        SalesCrudService,
        SalesStateService,
      ],
    };
  }
}
