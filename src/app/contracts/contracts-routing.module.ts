import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './screens/contracts/contracts.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'contracts',
      component: ContractsComponent
    },
    {
      path: '**',
      redirectTo: 'contracts'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
