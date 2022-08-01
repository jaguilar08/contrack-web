import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorizontalChartsComponent } from './dashboard/components/charts/horizontal-charts/horizontal-charts.component';
import { DashboardMonthlyComponent } from './dashboard/screens/dashboard-monthly/dashboard-monthly.component';
import { DashboardAnnualComponent } from './dashboard/screens/dashboard-annual/dashboard-annual.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from './material/material.module';
import { VerticalChartsComponent } from './dashboard/components/charts/vertical-charts/vertical-charts.component';
import { PieChartsComponent } from './dashboard/components/charts/pie-charts/pie-charts.component';
import { SettingsComponent } from './settings/screens/settings/settings.component';
import { TermsSetupCardComponent } from './settings/components/settingsCards/terms-setup-card/terms-setup-card.component';
import { TermsSelectionCardComponent } from './settings/components/settingsCards/terms-selection-card/terms-selection-card.component';
import { AuthGuard } from '@guards/base/auth.guard';
import { AuthInterceptorService } from '@services/base/auth-interceptor.service';
import { PermissionGuard } from '@guards/base/permission.guard';
import { AddFieldDialogComponent } from './settings/components/add-field-dialog/add-field-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalChartsComponent,
    DashboardMonthlyComponent,
    DashboardAnnualComponent,
    NavbarComponent,
    VerticalChartsComponent,
    PieChartsComponent,
    SettingsComponent,
    TermsSetupCardComponent,
    TermsSelectionCardComponent,
    AddFieldDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxChartsModule,
    CookieModule.withOptions(),
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    PermissionGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
