import { Component, OnInit, Input } from '@angular/core';
import { personality } from '../shared/personality.model';

@Component({
  selector: 'personality-component',
  templateUrl: './personality-component.component.html',
  styleUrls: ['./personality-component.component.css',
   '../shared/common.css']
})
export class PersonalityComponent implements OnInit {
@Input() personality: personality;






  constructor() { }

  ngOnInit() {
  }

}
