import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personality } from '../shared/personality.model';

@Component({
  selector: 'psnlty-srch-result',
  templateUrl: './psnlty-srch-result.component.html',
  styleUrls: ['./psnlty-srch-result.component.css']
})
export class PsnltySrchResultComponent implements OnInit {
  @Input() personality: Personality;
  @Output() addOptionClicked:EventEmitter<Personality> = new EventEmitter();

  constructor() { 
    console.log("******************");
  }

  onPersonalitySelected(){
    this.addOptionClicked.emit(this.personality);
  }
  ngOnInit() {
  }

}
