import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { MidcontComponent } from './midcont/midcont.component';
import { FlexibleService } from './flexible.service';
import { AppRoutingModule } from './app-routing.module';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TrendsComponent } from './trends/trends.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { ReportsComponent } from './reports/reports.component';
import { EdetailsComponent } from './edetails/edetails.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsideComponent,
    MidcontComponent,
    RecommendationComponent,
    ContactsComponent,
    TrendsComponent,
    BehaviorComponent,
    ReportsComponent,
    EdetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,ReactiveFormsModule,BrowserAnimationsModule
  ],
  providers: [FlexibleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
