import { Component, OnInit, Input } from '@angular/core';
import { TopicDetailService } from './topic-detail.service';
import { TopicModel } from './topic-model';

@Component({
  selector: 'topic-component',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css',
  '../shared/common.css']
})
export class TopicComponent implements OnInit {

 @Input() topic: TopicModel;

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.topic.title);
  }

}
