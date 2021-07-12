import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsdaStateService } from '@example/sdk/usda';

@Component({
  selector: 'web-usda',
  template: `
    <h1>Usda Status: {{ status$ | async }}</h1>
    <h1>usda page works!</h1>
  `,
})
export class UsdaPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: UsdaStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
