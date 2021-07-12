import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesStateService } from '@example/sdk/sales';

@Component({
  selector: 'web-sales',
  template: `
    <h1>Sales Status: {{ status$ | async }}</h1>
    <h1>sales page works!</h1>
  `,
})
export class SalesPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: SalesStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
