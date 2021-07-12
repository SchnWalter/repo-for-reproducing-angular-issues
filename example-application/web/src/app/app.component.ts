import { Component, OnInit } from '@angular/core';
import { VERSION } from '@example/sdk';
import { DepartmentsStateService } from '@example/sdk/departments';
import { Observable } from 'rxjs';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web';
  state$: Observable<string> | undefined;
  version = VERSION

  constructor(
    private readonly departmentsStateService: DepartmentsStateService,
  ) {
  }

  public ngOnInit(): void {
    this.state$ = this.departmentsStateService.get();
  }
}
