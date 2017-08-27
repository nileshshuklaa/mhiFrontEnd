import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environment/environment';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

export class Personality {

   private storageRef : any;
   public name: string;
   public imagePath: string;
   public title: string;
   public loveScore: number;
   public hateScore: number;

   constructor(storageRef: any, 
                name: string, imagePath: string, title: string, 
                loveScore: number, hateScore:number){

        this.storageRef = storageRef;
        this.name = name;
        this.imagePath = imagePath;
        this.title = title;
        this.loveScore = loveScore;
        this.hateScore = hateScore;
    }

}