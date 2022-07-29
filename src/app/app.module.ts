import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorizontalChartsComponent } from './dashboard/components/charts/horizontal-charts/horizontal-charts.component';
import { DashboardComponent } from './dashboard/screens/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from './material/material.module';
import { VerticalChartsComponent } from './dashboard/components/charts/vertical-charts/vertical-charts.component';
import { PieChartsComponent } from './dashboard/components/charts/pie-charts/pie-charts.component';
import { SettingsComponent } from './settings/screens/settings/settings.component';
import { TermsSetupCardComponent } from './settings/components/settingsCards/terms-setup-card/terms-setup-card.component';
import { TermsSelectionCardComponent } from './settings/components/settingsCards/terms-selection-card/terms-selection-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalChartsComponent,
    DashboardComponent,
    NavbarComponent,
    VerticalChartsComponent,
    PieChartsComponent,
    SettingsComponent,
    TermsSetupCardComponent,
    TermsSelectionCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    NgxChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
