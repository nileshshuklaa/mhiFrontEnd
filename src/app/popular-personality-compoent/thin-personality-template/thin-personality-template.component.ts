import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personality } from '../../shared/personality.model';

@Component({
  selector: 'thin-personality-template',
  templateUrl: './thin-personality-template.component.html',
  styleUrls: ['../../shared/common.css',
  './thin-personality-template.component.css']
})

export class ThinPersonalityTemplateComponent {
 @Input() personality: Personality;
 @Input() isDisplayAddOption: boolean;
 @Output() addOptionClicked:EventEmitter<string> = new EventEmitter();
 constructor() { 
  }
 
 onAddOptionClicked() {
      this.addOptionClicked.emit();
  }
}
