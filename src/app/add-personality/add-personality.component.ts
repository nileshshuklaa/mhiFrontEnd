import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';
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
  @Input() folder: string;
  @Output() cancelled:EventEmitter<string> = new EventEmitter();
  private storageRef: any;
  addPersonalityForm: FormGroup;
  private result; 
  private showError = false;

  constructor(private personalityServices: PersonalityServices, private firebaseService: AngularFireDatabase, firebaseApp: FirebaseApp, private router:Router) {
    
      this.storageRef = firebaseApp.storage().ref();
     
   }

  ngOnInit() {
    this.addPersonalityForm = new FormGroup({
      'wikiProfile': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'popularName': new FormControl(null, Validators.required),
      'domain': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required)
    });
  }


  back() {
        this.cancelled.emit();
        this.router.navigate(['./popularpersonality']);
  }

  onAddPersonality(data: Object){
    if(!this.errorExists()){
      this.upload();
      this.back();
    }
  }

errorExists(){

  console.log(this.addPersonalityForm.value['name']);
  if(
      (<HTMLInputElement>document.getElementById('file')).files[0] == null ||
      this.addPersonalityForm.value['name'] == null || this.addPersonalityForm.value['name'] == '' ||
      this.addPersonalityForm.value['title'] == null || this.addPersonalityForm.value['title'] == '' ||
      this.addPersonalityForm.value['country'] == null || this.addPersonalityForm.value['country'] == '' ||
      this.addPersonalityForm.value['popularName'] == null || this.addPersonalityForm.value['popularName'] == '' ||
      this.addPersonalityForm.value['domain'] == null || this.addPersonalityForm.value['domain'] == '' ||
      this.addPersonalityForm.value['wikiProfile'] == null || this.addPersonalityForm.value['wikiProfile'] == ''
    ){
      console.log('error occurred');
    this.showError = true;
    return true;
  }
  this.showError = false;
  return false;
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

   

}
