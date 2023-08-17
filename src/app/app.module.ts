import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlineMachineComponent } from './online-machine/online-machine.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component'; 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OnlineMachineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }