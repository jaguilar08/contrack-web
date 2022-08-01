import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAnnualComponent } from './screens/dashboard-annual/dashboard-annual.component';
import { DashboardMonthlyComponent } from './screens/dashboard-monthly/dashboard-monthly.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'monthly',
        component: DashboardMonthlyComponent
      },
      {
        path: 'annual',
        component: DashboardAnnualComponent
      },
      {
        path: '**',
        redirectTo: 'monthly'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
