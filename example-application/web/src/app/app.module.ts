import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleSdkCoreModule } from '@example/sdk/core';
import { ExampleSdkAccountingModule } from '@example/sdk/accounting';
import { ExampleSdkDepartmentsModule } from '@example/sdk/departments';
import { ExampleSdkDhsModule } from '@example/sdk/dhs';
import { ExampleSdkDoeModule } from '@example/sdk/doe';
import { ExampleSdkDolModule } from '@example/sdk/dol';
import { ExampleSdkDotModule } from '@example/sdk/dot';
import { ExampleSdkFdaModule } from '@example/sdk/fda';
import { ExampleSdkManagementModule } from '@example/sdk/management';
import { ExampleSdkReportsModule } from '@example/sdk/reports';
import { ExampleSdkSalesModule } from '@example/sdk/sales';
import { ExampleSdkUsdaModule } from '@example/sdk/usda';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigurationModule } from './app-configuration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NOTE: The configuration needs to be provided before the SDK uses it.
    AppConfigurationModule,
    ExampleSdkCoreModule.forRoot(),
    ExampleSdkAccountingModule.forRoot(),
    ExampleSdkDepartmentsModule.forRoot(),
    ExampleSdkDhsModule.forRoot(),
    ExampleSdkDoeModule.forRoot(),
    ExampleSdkDolModule.forRoot(),
    ExampleSdkDotModule.forRoot(),
    ExampleSdkFdaModule.forRoot(),
    ExampleSdkManagementModule.forRoot(),
    ExampleSdkReportsModule.forRoot(),
    ExampleSdkSalesModule.forRoot(),
    ExampleSdkUsdaModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
