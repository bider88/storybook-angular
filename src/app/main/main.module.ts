import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from '../material-module/material.module';
import { SettingsComponent } from './views/settings/settings.component';
import { AboutComponent } from './views/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    SettingsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
