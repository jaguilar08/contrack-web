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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from './material/material.module';
import { VerticalChartsComponent } from './dashboard/components/charts/vertical-charts/vertical-charts.component';
import { PieChartsComponent } from './dashboard/components/charts/pie-charts/pie-charts.component';
import { AuthGuard } from '@guards/base/auth.guard';
import { AuthInterceptorService } from '@services/base/auth-interceptor.service';
import { PermissionGuard } from '@guards/base/permission.guard';

import { SharedModule } from './shared/shared.module';

import { ContractsTableComponent } from './contracts/components/contracts-table/contracts-table.component';
import { ContractsComponent } from './contracts/screens/contracts/contracts.component';



@NgModule({
  declarations: [
    AppComponent,
    HorizontalChartsComponent,
    DashboardMonthlyComponent,
    DashboardAnnualComponent,
    VerticalChartsComponent,
    PieChartsComponent,
    ContractsTableComponent,
    ContractsComponent

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
    SharedModule
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
