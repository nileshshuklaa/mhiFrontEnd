import { Component, OnInit } from '@angular/core';
import { TopicDetailService } from './topic-detail.service';
import { TopicModel } from './topic-model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [TopicDetailService]
})
export class TopicComponent implements OnInit {

  topicDetails: TopicModel;

  constructor(private topicDetailService: TopicDetailService) { }

  ngOnInit() {
    this.topicDetails = this.topicDetailService.getTopicDetails();
  }

}
