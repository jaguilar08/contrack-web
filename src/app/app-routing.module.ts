import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/screens/dashboard/dashboard.component';
import { SettingsComponent } from './settings/screens/settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
