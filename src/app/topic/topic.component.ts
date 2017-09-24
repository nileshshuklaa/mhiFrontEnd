import { Component, OnInit, Input } from '@angular/core';
import { TopicDetailService } from './topic-detail.service';
import { TopicModel } from './topic-model';

@Component({
  selector: 'topic-component',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

 @Input() topic: TopicModel;

  constructor() { 
    //console.log(this.topic.title);
   // console.log("DSDFDSfadsfasd");
  }

  ngOnInit() {
    console.log(this.topic.title);
  }

}
