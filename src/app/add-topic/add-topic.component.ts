import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AutoCompleteService } from '../services/autocomplete.service';
import { Subject } from 'rxjs/Subject';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../environment/environment';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';

import { Personality } from '../shared/personality.model';


@Component({
  selector: 'add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  private addTopicForm: FormGroup;
  private isDisplayAddTopicForm: boolean = true;
  private personalities;
  private currentPersonality: Personality;
  private selectedPersonalities: Personality[] = [];
  displaySearchResult: boolean = true;
  startAt = new Subject();
  endAt = new Subject();
  lastKeypress: number = 0;
  private showForm = false;

  @ViewChild('personalityName') personalityName: ElementRef;


  constructor(private autoCompleteService : AutoCompleteService, private firebaseService: AngularFireDatabase, firebaseApp: FirebaseApp, private router:Router) { }

  ngOnInit() {
    this.autoCompleteService.getPersoanlities(this.startAt, this.endAt).subscribe(
      personalities => this.personalities = personalities
    );

    this.addTopicForm = new FormGroup({
      'personalityName': new FormControl(null),
      'topicTitle': new FormControl(null, Validators.required),
      'topicDetails': new FormControl(null, Validators.required),
      'topicTags': new FormControl(null, Validators.required),
      'videoLink': new FormControl(null, Validators.required)
    });
  }

  toggleShowForm (){
    this.showForm = !this.showForm;
  }

  onPersonalitySelected(event){
    if(-1 == this.selectedPersonalities.indexOf(event, 0) ){
      this.selectedPersonalities.push(event);
    }

    this.currentPersonality = null;
  }

  onPersonalityRemoved(event){
     var index = this.selectedPersonalities.indexOf(event, 0);
     if(index > -1){
       this.selectedPersonalities.splice(index, 1);
     }
    }


  onNameSelected(selectedName){
    this.toggleShowForm();
    this.displaySearchResult = false;
    console.log(this.personalityName.nativeElement);
    this.personalityName.nativeElement.value = "";
    this.autoCompleteService.getPersoanlity(selectedName).subscribe(
      snapshots => {
            snapshots.forEach(snapshot => {
              this.currentPersonality = new Personality(
                snapshot.name, 
                snapshot.imagePath,
                snapshot.title, //should be designation
                9.5, //snapshot.loveScore
                6 // snapshot.hateScore
              );
              console.log(snapshot);
          });
      }
    );
  }

  search($event) {
    this.displaySearchResult = true;
        let q = $event.target.value;
        console.log(q + '     #######     ' + q+"\uf8ff");
        this.startAt.next(q);
        this.endAt.next(q+"\uf8ff");
  
    this.lastKeypress = $event.timestamp;
  }
  
  onAddTopic(data: Object){
    let addTopicObj = {
        'personlity': this.selectedPersonalities,
        'title': this.addTopicForm.value['topicTitle'],
        'details': this.addTopicForm.value['topicDetails'],
        'tags': this.addTopicForm.value['topicTags'],
        'videoLink': this.addTopicForm.value['videoLink']
      };
     
     console.log(addTopicObj);
     this.firebaseService.list('topics').push(addTopicObj);
     this.isDisplayAddTopicForm = false;
  }

}
