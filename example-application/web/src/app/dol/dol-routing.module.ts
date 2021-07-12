import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DolPage } from './dol.page';

const routes: Routes = [
  {
    path: '',
    component: DolPage,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DolRoutingModule {
}
