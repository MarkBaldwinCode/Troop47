import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { HonorVetFundComponent } from './honor-vet-fund/honor-vet-fund.component';
import { ScoutmasterMinuteComponent } from './scoutmaster-minute/scoutmaster-minute.component';


const appRoutes: Routes =[
  {path: '', component: HomepageComponent},
  {path: "about", component:AboutComponent}, 
  {path: "honor_vet_fund", component:HonorVetFundComponent}, 
  {path: "scoutmaster_minute", component:ScoutmasterMinuteComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    HonorVetFundComponent,
    ScoutmasterMinuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
