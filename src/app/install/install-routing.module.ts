import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstallComponent } from './screens/install/install.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InstallComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallRoutingModule { }
