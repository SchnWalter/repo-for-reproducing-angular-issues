import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingCrudService } from './services/accounting-crud.service';
import { AccountingStateService } from './services/accounting-state.service';

@NgModule({
  imports: [ CommonModule ],
})
export class ExampleSdkAccountingModule {
  static forRoot(): ModuleWithProviders<ExampleSdkAccountingModule> {
    return {
      ngModule: ExampleSdkAccountingModule,
      providers: [
        AccountingCrudService,
        AccountingStateService,
      ],
    };
  }
}
