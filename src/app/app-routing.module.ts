import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { ProfessionalExperienceComponent } from './pages/professional-experience/professional-experience.component';
import { StudyComponent } from './pages/study/study.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const baseTitle = 'Curriculum Vitae | Kerekes Zsolt | Front End Developer | Software Engineer';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: {
      pageTitle: `${baseTitle}`,
      animation: { value: 'about-me'}
    }
  },
  {
    path: 'reference',
    component: ReferenceComponent,
    data: {
      pageTitle: `Reference, ${baseTitle}`,
      animation: { value: 'reference'}
    }
  },
  {
    path: 'professional-experience',
    component: ProfessionalExperienceComponent,
    data: {
      pageTitle: `Professional Experience, ${baseTitle}`,
      animation: { value: 'professional-experience'}
    }
  },
  {
    path: 'study',
    component: StudyComponent,
    data: {
      pageTitle: `Study, ${baseTitle}`,
      animation: { value: 'study'}
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {
      pageTitle: `Contacts, ${baseTitle}`,
      animation: { value: 'contacts'}
    }
  },
  {
    path: '404', component:
      Page404Component,
      data: {
        pageTitle: `Page Not Exists`,
        animation: { value: '404'}
      }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about-me',
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
