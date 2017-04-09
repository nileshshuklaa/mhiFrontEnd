import { Component, OnInit } from '@angular/core';
import { personality } from '../shared/personality.model';

@Component({
  selector: 'second-home-column-component',
  templateUrl: './second-home-column-component.component.html',
  styleUrls: ['./second-home-column-component.component.css']
})
export class SecondHomeColumnComponentComponent implements OnInit {

personalities: personality[] =[
    new personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 ),
    new personality("Narendra Modi", "../../assets/nmodi.jpg", "Vice President congress national party", 9.5,
    6 )
];
  constructor() { }

  ngOnInit() {
  }

}
