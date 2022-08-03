import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFieldDialogComponent } from './components/add-field-dialog/add-field-dialog.component';
import { AddResponsiblesDialogComponent } from './components/add-responsibles-dialog/add-responsibles-dialog.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './screens/settings/settings.component';
import { TermsSelectionCardComponent } from './components/settingsCards/terms-selection-card/terms-selection-card.component';
import { TermsSetupCardComponent } from './components/settingsCards/terms-setup-card/terms-setup-card.component';


@NgModule({
  declarations: [
    AddResponsiblesDialogComponent,
    AddFieldDialogComponent,
    TermsSetupCardComponent,
    TermsSelectionCardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
