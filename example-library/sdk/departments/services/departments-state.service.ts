import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { AccountingStateService } from '@example/sdk/accounting';
import { DhsStateService } from '@example/sdk/dhs';
import { DoeStateService } from '@example/sdk/doe';
import { DolStateService } from '@example/sdk/dol';
import { DotStateService } from '@example/sdk/dot';
import { FdaStateService } from '@example/sdk/fda';
import { ManagementStateService } from '@example/sdk/management';
import { ReportsStateService } from '@example/sdk/reports';
import { SalesStateService } from '@example/sdk/sales';
import { UsdaStateService } from '@example/sdk/usda';
import { map } from 'rxjs/operators';

@Injectable()
export class DepartmentsStateService {

  constructor(
    private readonly accountingStateService: AccountingStateService,
    private readonly dhsStateService: DhsStateService,
    private readonly doeStateService: DoeStateService,
    private readonly dolStateService: DolStateService,
    private readonly dotStateService: DotStateService,
    private readonly fdaStateService: FdaStateService,
    private readonly managementStateService: ManagementStateService,
    private readonly reportsStateService: ReportsStateService,
    private readonly salesStateService: SalesStateService,
    private readonly usdaStateService: UsdaStateService,
  ) {
  }

  get(): Observable<string> {
    return forkJoin({
      accounting: this.accountingStateService.getState(),
      dhs: this.dhsStateService.getState(),
      doe: this.doeStateService.getState(),
      dol: this.dolStateService.getState(),
      dot: this.dotStateService.getState(),
      fda: this.fdaStateService.getState(),
      management: this.managementStateService.getState(),
      reports: this.reportsStateService.getState(),
      sales: this.salesStateService.getState(),
      usda: this.usdaStateService.getState(),
    }).pipe(
      map((states: Record<string, boolean>): string => {
        return JSON.stringify(states);
      }),
    );
  }

}
