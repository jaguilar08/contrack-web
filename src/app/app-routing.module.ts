import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/base/auth.guard';
import { ContractsComponent } from './contracts/screens/contracts/contracts.component';
import { DashboardComponent } from './dashboard/screens/dashboard/dashboard.component';
import { SettingsComponent } from './settings/screens/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: DashboardComponent
      },
      { path: 'settings', component: SettingsComponent },
      { path: 'contracts', component: ContractsComponent }



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
