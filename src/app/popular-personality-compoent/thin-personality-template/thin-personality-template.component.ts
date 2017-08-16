import { Component, OnInit, Input } from '@angular/core';
import { Personality } from '../../shared/personality.model';

@Component({
  selector: 'thin-personality-template',
  templateUrl: './thin-personality-template.component.html',
  styleUrls: ['../../shared/common.css',
  './thin-personality-template.component.css']
})

export class ThinPersonalityTemplateComponent implements OnInit {

 @Input() personality: Personality;

  constructor() { }

  ngOnInit() {
  }

}
