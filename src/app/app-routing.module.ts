import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component.component';
import { SubscribedComponent } from './subscribed/subscribed.component';
import { AllDiscussionsComponent } from './all-discussions/all-discussions.component';
import { PopularPersonalityCompoent } from './popular-personality-compoent/popular-personality-compoent.component';

const applicationRoutes: Routes =[
    {path:'', component: HomeComponent},
    {path:'subscribed', component: SubscribedComponent},
    {path:'all', component: AllDiscussionsComponent},
    {path:'popularpersonality', component: PopularPersonalityCompoent}
];

@NgModule ({
imports: [
    RouterModule.forRoot(applicationRoutes)
],
exports: [RouterModule]
})

export class AppRoutingModule {

}