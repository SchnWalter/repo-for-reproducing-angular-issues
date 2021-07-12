import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounting',
    loadChildren: () => import('./accounting').then(l => l.AccountingModule),
  },
  {
    path: 'dhs',
    loadChildren: () => import('./dhs').then(l => l.DhsModule),
  },
  {
    path: 'doe',
    loadChildren: () => import('./doe').then(l => l.DoeModule),
  },
  {
    path: 'dol',
    loadChildren: () => import('./dol').then(l => l.DolModule),
  },
  {
    path: 'dot',
    loadChildren: () => import('./dot').then(l => l.DotModule),
  },
  {
    path: 'fda',
    loadChildren: () => import('./fda').then(l => l.FdaModule),
  },
  {
    path: 'management',
    loadChildren: () => import('./management').then(l => l.ManagementModule),
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports').then(l => l.ReportsModule),
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales').then(l => l.SalesModule),
  },
  {
    path: 'usda',
    loadChildren: () => import('./usda').then(l => l.UsdaModule),
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
