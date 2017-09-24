import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environment/environment';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

import { Personality } from '../shared/personality.model';
import { TopicModel } from '../topic/topic-model';


@Component({
  selector: 'app-subscribed',
  templateUrl: './subscribed.component.html',
  styleUrls: ['./subscribed.component.css',
  '../shared/common.css']
})
export class SubscribedComponent implements OnInit {

  private afTopics : FirebaseListObservable<any>;
  private storageRef : any;
  private topics: TopicModel[] = [];
  private isTopicListAvailable = false;
  private showAddPersonalityButton = true;
  private personalities: Personality[] = [];

  constructor(public firebaseService: AngularFireDatabase, firebaseApp: FirebaseApp) { 
    this.storageRef = firebaseApp.storage().ref();
    //this.firebaseService.list('topics').subscribe(snapshots => this.populateTopics(snapshots));
  }

  ngOnInit(){
    this.firebaseService.list('topics').subscribe(snapshots => this.populateTopics(snapshots));
    console.log('loading subscribed component list');
  }

 toggleAddPersonalityButton(){
   this.showAddPersonalityButton = !this.showAddPersonalityButton;
 }

 populateTopics(snapshots){
      this.topics = [];
      snapshots.forEach(snapshot => {
          var currentTopic = new TopicModel(
            snapshot.title, 
            snapshot.details,
            snapshot.tags,
            snapshot.videoLink
          );

          
          this.topics.push(currentTopic);
          console.log(this.topics.length);
          this.isTopicListAvailable = true;
         
        });
    }

  populatePersonalityObjects(snapshots){
      this.personalities = [];
      snapshots.forEach(snapshot => {
          var currentPersonality = new Personality(
            snapshot.name, 
            snapshot.imagePath,
            snapshot.title, //should be designation
            9.5, //snapshot.loveScore
            6 // snapshot.hateScore
          );

          console.log(currentPersonality);
          this.personalities.push(currentPersonality);
         
        });
    }
}
