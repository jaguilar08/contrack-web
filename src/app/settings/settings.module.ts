import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFieldDialogComponent } from './components/add-field-dialog/add-field-dialog.component';
import { AddResponsiblesDialogComponent } from './components/add-responsibles-dialog/add-responsibles-dialog.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './screens/settings/settings.component';
import { FieldsSelectionCardComponent } from './components/settingsCards/fields-selection-card/fields-selection-card.component';
import { FieldsSetupCardComponent } from './components/settingsCards/fields-setup-card/fields-setup-card.component';
import { FieldDeleteDialogComponent } from './components/field-delete-dialog/field-delete-dialog.component';
import { ContractCategoryComponent } from './components/settingsCards/contract-category/contract-category.component';


@NgModule({
  declarations: [
    AddResponsiblesDialogComponent,
    AddFieldDialogComponent,
    FieldsSetupCardComponent,
    FieldsSelectionCardComponent,
    SettingsComponent,
    FieldDeleteDialogComponent,
    ContractCategoryComponent
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
