import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personality } from '../shared/personality.model';

@Component({
  selector: 'personality-component',
  templateUrl: './personality-component.component.html',
  styleUrls: ['./personality-component.component.css',
   '../shared/common.css']
})
export class PersonalityComponent implements OnInit {
@Input() personality: Personality;
@Input() isDisplayRemoveOption: boolean;
@Output() removeOptionClicked:EventEmitter<Personality> = new EventEmitter();

 constructor() { }

  ngOnInit() {
  }

  onRemoveSelection(){
    this.removeOptionClicked.emit(this.personality);
  }
}
