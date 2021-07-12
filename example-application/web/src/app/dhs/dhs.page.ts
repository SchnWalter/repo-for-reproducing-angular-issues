import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DhsStateService } from '@example/sdk/dhs';

@Component({
  selector: 'web-dhs',
  template: `
    <h1>Dhs Status: {{ status$ | async }}</h1>
    <h1>dhs page works!</h1>
  `,
})
export class DhsPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: DhsStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
