import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/modules/material/material.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { ProfessionalExperienceComponent } from './pages/professional-experience/professional-experience.component';
import { StudyComponent } from './pages/study/study.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { VideoComponent } from './blocks/video/video.component';
import { CountOnMeComponent } from './blocks/count-on-me/count-on-me.component';
import { ExperienceProgressComponent } from './blocks/experience-progress/experience-progress.component';
import { AboutMeTextComponent } from './blocks/about-me-text/about-me-text.component';
import { ReferenceListComponent } from './blocks/reference-list/reference-list.component';
import { StudyListComponent } from './blocks/study-list/study-list.component';
import { ProfessionalExperienceListComponent } from './blocks/professional-experience-list/professional-experience-list.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { ContactFormComponent } from './blocks/contact-form/contact-form.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { DataStorageService } from './shared/services/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutMeComponent,
    Page404Component,
    ReferenceComponent,
    ProfessionalExperienceComponent,
    StudyComponent,
    ContactsComponent,
    VideoComponent,
    CountOnMeComponent,
    ExperienceProgressComponent,
    AboutMeTextComponent,
    ReferenceListComponent,
    StudyListComponent,
    ProfessionalExperienceListComponent,
    FooterComponent,
    ContactFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    DataStorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
