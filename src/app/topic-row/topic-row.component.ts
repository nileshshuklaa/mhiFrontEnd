import { Component, OnInit } from '@angular/core';
import { personality } from '../shared/personality.model';

@Component({
  selector: 'topic-row',
  templateUrl: './topic-row.component.html',
  styleUrls: ['./topic-row.component.css',
   '../shared/common.css']
})
export class TopicRowComponent implements OnInit {

title: string = "Who should be the next PM?Who should be the next PM?";

personalities: personality[] =[
    new personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new personality("Narendra Modi", "../../assets/nmodi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new personality("Arvind Kejriwal", "../../assets/akejiwal.jpg", "Vice President congress national party", 9.5,
    6 )

];
  constructor() { }

  ngOnInit() {
  }

}
