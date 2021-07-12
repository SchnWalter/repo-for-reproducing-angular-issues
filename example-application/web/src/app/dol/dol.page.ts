import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DolStateService } from '@example/sdk/dol';

@Component({
  selector: 'web-dol',
  template: `
    <h1>Dol Status: {{ status$ | async }}</h1>
    <h1>dol page works!</h1>
  `,
})
export class DolPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: DolStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
