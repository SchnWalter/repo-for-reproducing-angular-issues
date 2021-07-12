import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhsPage } from './dhs.page';

const routes: Routes = [
  {
    path: '',
    component: DhsPage,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DhsRoutingModule {
}
