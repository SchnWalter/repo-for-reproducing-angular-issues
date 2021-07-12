import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DotStateService } from '@example/sdk/dot';

@Component({
  selector: 'web-dot',
  template: `
    <h1>Dot Status: {{ status$ | async }}</h1>
    <h1>dot page works!</h1>
  `,
})
export class DotPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: DotStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
