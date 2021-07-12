import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FdaStateService } from '@example/sdk/fda';

@Component({
  selector: 'web-fda',
  template: `
    <h1>Fda Status: {{ status$ | async }}</h1>
    <h1>fda page works!</h1>
  `,
})
export class FdaPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: FdaStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
