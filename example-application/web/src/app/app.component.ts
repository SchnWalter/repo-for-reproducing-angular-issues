import { Component } from '@angular/core';
import { VERSION } from '@example/sdk';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  version = VERSION
}
