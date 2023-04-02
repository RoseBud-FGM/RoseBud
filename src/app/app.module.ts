import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ReportComponent } from './report/report.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { TrackingComponent } from './tracking/tracking.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReviewComponent } from './review/review.component';
import { ForumComponent } from './forum/forum.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginOrgComponent } from './login-org/login-org.component';
import { SignupUserComponent } from './signup-user/signup-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ReportComponent,
    CounsellingComponent,
    TrackingComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent,
    ForumComponent,
    LoginUserComponent,
    LoginOrgComponent,
    SignupUserComponent
  ],
  imports: [
    AngularFireModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
