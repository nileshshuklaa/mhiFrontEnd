import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './environment/environment';
import { ImageUploadModule } from 'angular2-image-upload';

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
import { TopicComponent } from './topic/topic.component';
import { AddPersonalityComponent } from './add-personality/add-personality.component';
import { PersonalityServices } from './services/personality.services';


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
    AllDiscussionsComponent,
    TopicComponent,
    AddPersonalityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ImageUploadModule.forRoot()
  ],
  providers: [PersonalityServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
