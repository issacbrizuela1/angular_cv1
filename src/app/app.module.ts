import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { NavbarComponent } from './assets/navbar/navbar.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ProyectsComponent } from './main/proyects/proyects.component';
import { PersonalproyectsComponent } from './main/personalproyects/personalproyects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent,
    ProyectsComponent,
    PersonalproyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
