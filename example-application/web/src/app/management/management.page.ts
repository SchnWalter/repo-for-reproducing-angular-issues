import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagementStateService } from '@example/sdk/management';

@Component({
  selector: 'web-management',
  template: `
    <h1>Management Status: {{ status$ | async }}</h1>
    <h1>management page works!</h1>
  `,
})
export class ManagementPage implements OnInit {
  status$: Observable<boolean> | undefined;

  constructor(
    private readonly stateService: ManagementStateService,
  ) {
  }

  ngOnInit(): void {
    this.status$ = this.stateService.getState();
  }

}
