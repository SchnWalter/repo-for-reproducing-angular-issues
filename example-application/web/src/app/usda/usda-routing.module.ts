import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsdaPage } from './usda.page';

const routes: Routes = [
  {
    path: '',
    component: UsdaPage,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class UsdaRoutingModule {
}
