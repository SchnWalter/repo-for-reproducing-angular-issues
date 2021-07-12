import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingPage } from './accounting.page';

const routes: Routes = [
  {
    path: '',
    component: AccountingPage,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AccountingRoutingModule {
}
