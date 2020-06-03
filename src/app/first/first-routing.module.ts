import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplePageComponent } from './simple-page/simple-page.component';

const routes: Routes = [
  {
    path: '',
    component: SimplePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
