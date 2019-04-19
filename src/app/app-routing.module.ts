import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListApplicationsComponent } from './applications/list-applications/list-applications.component';
import { CreateApplicationComponent } from './applications/create-application/create-application.component';
import { ViewOneApplicationComponent } from './applications/view-one-application/view-one-application.component';
import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'applications', component: ListApplicationsComponent,  canActivate: [AuthGuardService],},
  { path: 'create-application', component: CreateApplicationComponent, canActivate: [AuthGuardService],},
  { path: 'list-applications', component: ListApplicationsComponent, canActivate: [AuthGuardService],},
  { path: 'list-applications/1', component: ViewOneApplicationComponent, canActivate: [AuthGuardService],},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
