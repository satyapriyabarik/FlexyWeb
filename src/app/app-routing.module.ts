import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MidcontComponent } from './midcont/midcont.component';
import {RecommendationComponent } from './recommendation/recommendation.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { ReportsComponent } from './reports/reports.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TrendsComponent } from './trends/trends.component';
import { EdetailsComponent } from './edetails/edetails.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MidcontComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'behavior', component: BehaviorComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'detail/:id', component: EdetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
