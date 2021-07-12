import { Inject, Injectable } from '@angular/core';
import { IRequestService, REQUEST_SERVICE } from '@example/sdk/core';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class ReportsStateService {
  private readonly apiPath: string = 'accounting';

  constructor(
    @Inject(REQUEST_SERVICE)
    private readonly requestService: IRequestService,
  ) {
  }

  getState(): Observable<boolean> {
    return this.requestService.get(this.apiPath).pipe(
      mapTo(true),
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
