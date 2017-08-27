import { Component, OnInit, Injectable } from '@angular/core';
import { Personality} from '../shared/personality.model';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environment/environment';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

@Component({
  selector: 'popular-personality-component',
  templateUrl: './popular-personality-compoent.component.html',
  styleUrls: ['./popular-personality-compoent.component.css']
})

@Injectable()
export class PopularPersonalityCompoent {
  private afPersonalities : FirebaseListObservable<any>;
  private storageRef : any;
  private personalities: Personality[] = [];

  constructor(public firebaseService: AngularFireDatabase, firebaseApp: FirebaseApp) { 
    this.storageRef = firebaseApp.storage().ref();
    this.firebaseService.list('personalities').subscribe(snapshots => this.populatePersonalityObjects(snapshots));
  }

  populatePersonalityObjects(snapshots){
      snapshots.forEach(snapshot => {
          //console.log(snapshot.key, snapshot.imagePath);
          var currentPersonality = new Personality(
            this.storageRef,
            snapshot.name, 
            snapshot.imagePath,
            snapshot.title, //should be designation
            9.5, //snapshot.loveScore
            6 // snapshot.hateScore
          );

          this.personalities.push(currentPersonality);
         
        });
    }

 /* getImagePath(currentPersonality){
      var pathRef = this.storageRef.child(currentPersonality.imageKey);
      pathRef.getDownloadURL().then(url =>  currentPersonality.imagePath);
  }*/

}
