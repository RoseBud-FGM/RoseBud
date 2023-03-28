import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ReportComponent } from './report/report.component'
import { HeaderComponent } from './header/header.component';
import { CounsellingComponent } from './counselling/counselling.component';

const routes: Routes = [{path:'', component:CounsellingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
