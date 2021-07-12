import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoeStateService } from '@example/sdk/doe';

@Component({
  selector: 'web-doe',
  template: `
    <h1>Doe Status: {{ status$ | async }}</h1>
    <h1>doe page works!</h1>
  `,
})
export class DoePage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: DoeStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
