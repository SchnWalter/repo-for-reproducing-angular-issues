import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountingStateService } from '@example/sdk/accounting';

@Component({
  selector: 'web-accounting',
  template: `
    <h1>Accounting Status: {{ status$ | async }}</h1>
    <h1>accounting page works!</h1>
  `,
})
export class AccountingPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: AccountingStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
