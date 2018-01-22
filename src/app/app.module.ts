import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { ProfessionalExperienceComponent } from './pages/professional-experience/professional-experience.component';
import { StudyComponent } from './pages/study/study.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { VideoComponent } from './blocks/video/video.component';
import { CountMeOnComponent } from './blocks/count-me-on/count-me-on.component';
import { ExperienceProgressComponent } from './blocks/experience-progress/experience-progress.component';
import { AboutMeTextComponent } from './blocks/about-me-text/about-me-text.component';
import { ReferenceListComponent } from './blocks/reference-list/reference-list.component';
import { ReferenceItemComponent } from './blocks/reference-item/reference-item.component';
import { StudyListComponent } from './blocks/study-list/study-list.component';
import { ProfessionalExperienceListComponent } from './blocks/professional-experience-list/professional-experience-list.component';
import { ProfessionalExperienceItemComponent } from './blocks/professional-experience-item/professional-experience-item.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { ContactFormComponent } from './blocks/contact-form/contact-form.component';


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
    CountMeOnComponent,
    ExperienceProgressComponent,
    AboutMeTextComponent,
    ReferenceListComponent,
    ReferenceItemComponent,
    StudyListComponent,
    ProfessionalExperienceListComponent,
    ProfessionalExperienceItemComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
