import { Component, OnInit } from '@angular/core';
import { Personality } from '../shared/personality.model';

@Component({
  selector: 'app-subscribed',
  templateUrl: './subscribed.component.html',
  styleUrls: ['./subscribed.component.css',
  '../shared/common.css']
})
export class SubscribedComponent implements OnInit {

  title: string = "THis is subscribed topic place --> Who should be the next PM?";

personalities: Personality[] =[
    new Personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new Personality("Narendra Modi", "../../assets/nmodi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new Personality("Arvind Kejriwal", "../../assets/akejiwal.jpg", "Vice President congress national party", 9.5,
    6 )

];
  constructor() { }

  ngOnInit() {
  }
}
