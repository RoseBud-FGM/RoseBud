
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ReportComponent } from './report/report.component'
import { HeaderComponent } from './header/header.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { ReviewComponent } from './review/review.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [{path:'', component:ForumComponent},
{path:'report', component: ReportComponent},
{path:'counselling', component: CounsellingComponent},
{path:'review', component: ReviewComponent},
{path:'tracking', component: TrackingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }