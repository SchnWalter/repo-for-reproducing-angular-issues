import { NgModule } from '@angular/core';
import { API_BASE_URL } from '@example/sdk/core';

@NgModule({
  providers: [
    {
      provide: API_BASE_URL,
      useValue: 'https://localhost:3000/api/v1',
    },
  ],
})
export class AppConfigurationModule {
}
