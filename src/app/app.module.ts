import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalityComponent } from './personality-component/personality-component.component';
import { TopicRowComponent } from './topic-row/topic-row.component';
import { SecondHomeColumnComponent } from './second-home-column-component/second-home-column-component.component';
import { ThirdHomeColumnComponent } from './third-home-column-component/third-home-column-component.component';
import { PopularPersonalityCompoent } from './popular-personality-compoent/popular-personality-compoent.component';
import { ThinPersonalityTemplateComponent } from './popular-personality-compoent/thin-personality-template/thin-personality-template.component';
import { HomeComponent } from './home-component/home-component.component';
import { SubscribedComponent } from './subscribed/subscribed.component';
import { AllDiscussionsComponent } from './all-discussions/all-discussions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalityComponent,
    TopicRowComponent,
    SecondHomeColumnComponent,
    ThirdHomeColumnComponent,
    PopularPersonalityCompoent,
    ThinPersonalityTemplateComponent,
    HomeComponent,
    SubscribedComponent,
    AllDiscussionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
