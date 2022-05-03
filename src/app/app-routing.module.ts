import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CoursesComponent } from './courses/courses.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { TipsPractiesComponent } from './tips-practies/tips-practies.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { FaqsComponent } from './faqs/faqs.component';
import { StudentforumComponent } from './studentforum/studentforum.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HelpComponent } from './help/help.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes =[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'my-profile',
    component: MyProfileComponent
  },
  {
    path:'courses',
    component: CoursesComponent
  },
  {
    path:'evaluation',
    component: EvaluationComponent
  },
  {
    path:'tips-practies',
    component: TipsPractiesComponent
  },
  {
    path:'gettingstarted',
    component: GettingstartedComponent
  },
  {
    path:'faqs',
    component: FaqsComponent
  },
  {
    path:'studentforum',
    component: StudentforumComponent
  },
  {
    path:'',
    component: SigninComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'nav-bar',
    component: NavBarComponent
  },
  {
    path:'help',
    component: HelpComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [HomeComponent]
