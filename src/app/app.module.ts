import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateApplicationComponent } from './applications/create-application/create-application.component';
import { ListApplicationsComponent } from './applications/list-applications/list-applications.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DoneApplicationsComponent } from './applications/list-applications/done-applications/done-applications.component';
import { ViewOneApplicationComponent } from './applications/view-one-application/view-one-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateApplicationComponent,
    ListApplicationsComponent,
    NotFoundComponent,
    DoneApplicationsComponent,
    ViewOneApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
