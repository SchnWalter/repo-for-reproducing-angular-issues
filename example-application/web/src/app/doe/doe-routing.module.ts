import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoePage } from './doe.page';

const routes: Routes = [
  {
    path: '',
    component: DoePage,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DoeRoutingModule {
}
