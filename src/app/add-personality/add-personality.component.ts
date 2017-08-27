import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PersonalityServices } from '../services/personality.services';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environment/environment';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';


@Component({
  selector: 'add-personality',
  templateUrl: './add-personality.component.html',
  styleUrls: ['./add-personality.component.css',
   '../shared/common.css']
})
export class AddPersonalityComponent implements OnInit {
  private storageRef: any;
  @Input() folder: string;
  addPersonalityForm: FormGroup;
  private result; 

  constructor(private personalityServices: PersonalityServices, private firebaseService: AngularFireDatabase, firebaseApp: FirebaseApp) {
      this.storageRef = firebaseApp.storage().ref();
      this.displayImage();
   }

  ngOnInit() {
    this.addPersonalityForm = new FormGroup({
      'wikiProfile': new FormControl(null),
      'name': new FormControl(null),
      'title': new FormControl(null),
      'popularName': new FormControl(null),
      'domain': new FormControl(null),
      'country': new FormControl(null)
    });
  }


  onAddPersonality(data: Object){
    let imagePath = this.upload();
  }

  upload() {
        let path = '';
        let success = false;
        let selectedFile = (<HTMLInputElement>document.getElementById('file')).files[0];
        let af = this.firebaseService;
        let folder = 'personalityImages';
        let fileName = Date.now() + selectedFile.name;
        path = `/${folder}/${fileName}`;
        var iRef = this.storageRef.child(path);
            
        return iRef.put(selectedFile).then((snapshot) => this.addObject(snapshot, folder, fileName, selectedFile.name));
        
    }

    addObject(snapshot, folder, fileName, selectedFileName){
      let path = `/${folder}/${fileName}`;
      
      let addPersonalityObj = {
        'name': this.addPersonalityForm.value['name'],
        'title': this.addPersonalityForm.value['title'],
        'country': this.addPersonalityForm.value['country'],
        'popularName': this.addPersonalityForm.value['popularName'],
        'domain': this.addPersonalityForm.value['domain'],
        'wikiProfile': this.addPersonalityForm.value['wikiProfile'],
        'imagePath': snapshot.downloadURL
      };
     
      this.firebaseService.list('personalities').push(addPersonalityObj);
    }

    displayImage(){
      console.log('entered method');
      var pathRef = this.storageRef.child('personalityImages/1499649754913akejiwal.jpg');
      pathRef.getDownloadURL().then(url => this.result = url);
      //pathRef.getDownloadURL().then(url => console.log(url));
      //console.log(this.result);
    }

}
