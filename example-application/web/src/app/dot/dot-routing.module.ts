import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotPage } from './dot.page';

const routes: Routes = [
  {
    path: '',
    component: DotPage,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class DotRoutingModule {
}
