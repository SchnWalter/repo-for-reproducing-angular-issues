import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportsStateService } from '@example/sdk/reports';

@Component({
  selector: 'web-reports',
  template: `
    <h1>Reports Status: {{ status$ | async }}</h1>
    <h1>reports page works!</h1>
  `,
})
export class ReportsPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: ReportsStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
