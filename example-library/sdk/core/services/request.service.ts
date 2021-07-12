import { ClassProvider, Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';

export const API_BASE_URL: InjectionToken<string>
  = new InjectionToken<string>('API_BASE_URL');

export interface IRequestOptions extends Record<string, boolean | number | string> {
}

export interface IRequestService {
  delete<T>(url: string, options?: IRequestOptions): Observable<T | undefined>;

  get<T>(url: string, options?: IRequestOptions): Observable<T | undefined>;

  patch<T>(url: string, options?: IRequestOptions): Observable<T | undefined>;

  post<T>(url: string, options?: IRequestOptions): Observable<T | undefined>;

  put<T>(url: string, options?: IRequestOptions): Observable<T | undefined>;
}

export const REQUEST_SERVICE: InjectionToken<IRequestService>
  = new InjectionToken<IRequestService>('REQUEST_SERVICE');

@Injectable()
export class RequestService implements IRequestService {
  constructor(
    @Inject(API_BASE_URL)
    private readonly apiBaseUrl: string,
  ) {
    console.log(`API_BASE_URL = ${ apiBaseUrl }`);
  }

  delete<T>(url: string, options?: IRequestOptions): Observable<T | undefined> {
    console.log(`RequestService.delete on ${ this.apiBaseUrl }/${ url }`);
    return of(undefined);
  }

  get<T>(url: string, options?: IRequestOptions): Observable<T | undefined> {
    console.log(`RequestService.get on ${ this.apiBaseUrl }/${ url }`);
    return of(undefined);
  }

  patch<T>(url: string, options?: IRequestOptions): Observable<T | undefined> {
    console.log(`RequestService.patch on ${ this.apiBaseUrl }/${ url }`);
    return of(undefined);
  }

  post<T>(url: string, options?: IRequestOptions): Observable<T | undefined> {
    console.log(`RequestService.post on ${ this.apiBaseUrl }/${ url }`);
    return of(undefined);
  }

  put<T>(url: string, options?: IRequestOptions): Observable<T | undefined> {
    console.log(`RequestService.put on ${ this.apiBaseUrl }/${ url }`);
    return of(undefined);
  }
}

export const REQUEST_SERVICE_PROVIDER: ClassProvider = {
  provide: REQUEST_SERVICE,
  useClass: RequestService,
};
