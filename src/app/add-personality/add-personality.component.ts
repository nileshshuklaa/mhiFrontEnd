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
      'popularName': new FormControl(null),
      'domain': new FormControl(null),
      'country': new FormControl(null)
    });
  }


  onAddPersonality(data: Object){
    let imagePath = this.upload();
    let addPersonalityObj = {
      'name': this.addPersonalityForm.value['name'],
      'country': this.addPersonalityForm.value['country'],
      'popularName': this.addPersonalityForm.value['popularName'],
      'domain': this.addPersonalityForm.value['domain'],
      'wikiProfile': this.addPersonalityForm.value['wikiProfile'],
      'imagePath': imagePath
    };
    console.log(" imagePath in add personality" + imagePath);
    console.log(JSON.stringify(addPersonalityObj));
    this.firebaseService.list('personalities').push(addPersonalityObj);
    // this.personalityServices.addPersonality(this.addPersonalityForm.value).
    // subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
  }

  upload() : string {
        let path = '';
        let success = false;
        // This currently only grabs item 0, TODO refactor it to grab them all
        for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
            console.log(selectedFile);
            
            let af = this.firebaseService;
            let folder = 'personalityImages';
            let fileName = Date.now() + selectedFile.name;
            path = `/${folder}/${fileName}`;
            var iRef = this.storageRef.child(path);
            console.log('***************** ' + iRef);
            iRef.put(selectedFile).then((snapshot) => {
                console.log('Uploaded a blob or file! Now storing the reference at',`/${folder}/`);
                this.firebaseService.list(`/${folder}/`).push({ path: path, filename: selectedFile.name })
            });
        }
        return path;
    }

    displayImage(){
      console.log('entered method');
      var pathRef = this.storageRef.child('personalityImages/1499649754913akejiwal.jpg');
      pathRef.getDownloadURL().then(url => this.result = url);
      //pathRef.getDownloadURL().then(url => console.log(url));
      console.log(this.result);
    }

}
