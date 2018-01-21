import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { ProfessionalExperienceComponent } from './pages/professional-experience/professional-experience.component';
import { StudyComponent } from './pages/study/study.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about-me' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'professional-experience', component: ProfessionalExperienceComponent },
  { path: 'study', component: StudyComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
