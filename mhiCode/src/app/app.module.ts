import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonalityComponentComponent } from './personality-component/personality-component.component';
import { FirstHomeColumnComponentComponent } from './first-home-column-component/first-home-column-component.component';
import { SecondHomeColumnComponentComponent } from './second-home-column-component/second-home-column-component.component';
import { ThirdHomeColumnComponentComponent } from './third-home-column-component/third-home-column-component.component';
import { PopularPersonalityCompoentComponent } from './popular-personality-compoent/popular-personality-compoent.component';
import { ThinPersonalityTemplateComponent } from './popular-personality-compoent/thin-personality-template/thin-personality-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalityComponentComponent,
    FirstHomeColumnComponentComponent,
    SecondHomeColumnComponentComponent,
    ThirdHomeColumnComponentComponent,
    PopularPersonalityCompoentComponent,
    ThinPersonalityTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
