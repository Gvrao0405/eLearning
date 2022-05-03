import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { TipsPractiesComponent } from './tips-practies/tips-practies.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { FaqsComponent } from './faqs/faqs.component';
import { StudentforumComponent } from './studentforum/studentforum.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HelpComponent } from './help/help.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    routingComponents,
    MyProfileComponent,
    CoursesComponent,
    TipsPractiesComponent,
    EvaluationComponent,
    GettingstartedComponent,
    FaqsComponent,
    StudentforumComponent,
    SigninComponent,
    SignupComponent,
    HelpComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
