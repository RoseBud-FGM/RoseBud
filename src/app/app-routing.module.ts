import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ReportComponent } from './report/report.component'
import { CounsellingComponent } from './counselling/counselling.component';
import { ReviewComponent } from './review/review.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ForumComponent } from './forum/forum.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { LoginOrgComponent } from './login-org/login-org.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{path:'', component:LandingComponent},
{path:'report', component: ReportComponent},
{path:'forum', component: ForumComponent},
{path:'counselling', component: CounsellingComponent},
{path:'review', component: ReviewComponent},
{path:'tracking', component: TrackingComponent},
{path: 'login-org', component: LoginOrgComponent},
{path: 'doctor', component: DoctorsComponent},
{path: 'post/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }