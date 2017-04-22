import { Component, OnInit, Input } from '@angular/core';
import { personality } from '../../shared/personality.model';

@Component({
  selector: 'thin-personality-template',
  templateUrl: './thin-personality-template.component.html',
  styleUrls: ['../../shared/common.css']
})

export class ThinPersonalityTemplateComponent implements OnInit {

 @Input() personality: personality;

  constructor() { }

  ngOnInit() {
  }

}
