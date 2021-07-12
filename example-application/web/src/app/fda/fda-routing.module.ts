import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdaPage } from './fda.page';

const routes: Routes = [
  {
    path: '',
    component: FdaPage,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class FdaRoutingModule {
}
