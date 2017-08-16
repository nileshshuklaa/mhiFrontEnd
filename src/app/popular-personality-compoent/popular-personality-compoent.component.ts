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
export class PopularPersonalityCompoent implements OnInit {
  private afPersonalities : FirebaseListObservable<any>;
  private storageRef : any;
  private personalitiesNew: Personality[] = [];

personalities: Personality[] =[
    new Personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new Personality("Narendra Modi", "../../assets/nmodi.jpg", "Prime Minister, India", 9.5,
    6 ),
    new Personality("Arvind Kejriwal", "../../assets/akejiwal.jpg", "Chief Minister, Delhi", 9.5,
    6 ),
     new Personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new Personality("Narendra Modi", "../../assets/nmodi.jpg", "Prime Minister, India", 9.5,
    6 ),
    new Personality("Arvind Kejriwal", "../../assets/akejiwal.jpg", "Chief Minister, Delhi", 9.5,
    6 ),new Personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new Personality("Narendra Modi", "../../assets/nmodi.jpg", "Prime Minister, India", 9.5,
    6 ),
    new Personality("Arvind Kejriwal", "../../assets/akejiwal.jpg", "Chief Minister, Delhi", 9.5,
    6 ),new Personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new Personality("Narendra Modi", "../../assets/nmodi.jpg", "Prime Minister, India", 9.5,
    6 ),
    new Personality("Arvind Kejriwal", "../../assets/akejiwal.jpg", "Chief Minister, Delhi", 9.5,
    6 )

];

  constructor(public firebaseService: AngularFireDatabase, firebaseApp: FirebaseApp) { 
    this.storageRef = firebaseApp.storage().ref();
    this.firebaseService.list('personalities').subscribe(snapshots => {
      snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.imagePath);
          var currentPersonality = new Personality(
            snapshot.name, 
            snapshot.imagePath,
            snapshot.domain, //should be designation
            9.5, //snapshot.loveScore
            6 // snapshot.hateScore
          );
          this.personalitiesNew.push(currentPersonality);
          console.log('!!!!!!!!!!!!!!     ' + currentPersonality.name);
        });
    });
  }

  ngOnInit() {
    this.populateImagePaths();
    console.log('~~~~~~~~~~~~~ ' + (<Personality>this.personalitiesNew[0]));
  }

  populateImagePaths(){
      
      // var pathRef = this.storageRef.child('personalityImages/fileName');
      // pathRef.getDownloadURL().then(url => this.result = url);
  }

}
