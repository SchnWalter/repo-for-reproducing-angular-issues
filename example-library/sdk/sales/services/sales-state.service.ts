import { Inject, Injectable } from '@angular/core';
import { IRequestService, REQUEST_SERVICE } from '@example/sdk/core';
import { ReportsStateService } from '@example/sdk/reports';
import { forkJoin, Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Injectable()
export class SalesStateService {
  private readonly apiPath: string = 'accounting';

  constructor(
    @Inject(REQUEST_SERVICE)
    private readonly requestService: IRequestService,
    private readonly reportsStateService: ReportsStateService,
  ) {
  }

  getState(): Observable<boolean> {
    return forkJoin({
      sales: this.requestService.get<boolean>(this.apiPath),
      reports: this.reportsStateService.getState(),
    }).pipe(
      map((state: { sales: boolean | undefined, reports: boolean | undefined }): boolean => {
        return !!(state.sales && state.reports);
      }),
    );
  }

  setState(newValue: boolean): Observable<void> {
    return this.requestService.post(this.apiPath, {
      state: newValue,
    }).pipe(
      mapTo(undefined),
    );
  }
}
