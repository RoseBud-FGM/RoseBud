import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ReportComponent } from './report/report.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { TrackingComponent } from './tracking/tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ReportComponent,
    CounsellingComponent,
    TrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
