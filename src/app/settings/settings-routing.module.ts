import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './screens/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '**',
        redirectTo: 'settings'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
