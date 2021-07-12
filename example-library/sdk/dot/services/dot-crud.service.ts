import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DotCrudService {
  constructor() {
  }

  create(value: object): Observable<object> {
    return of(value);
  }

  read(): Observable<object> {
    return of({});
  }

  update(value: object): Observable<object> {
    return of(value);
  }

  delete(): Observable<void> {
    return of(undefined);
  }
}
