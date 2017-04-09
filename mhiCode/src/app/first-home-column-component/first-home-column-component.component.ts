import { Component, OnInit } from '@angular/core';
import { personality } from '../shared/personality.model';

@Component({
  selector: 'first-home-column-component',
  templateUrl: './first-home-column-component.component.html',
  styleUrls: ['./first-home-column-component.component.css']
})
export class FirstHomeColumnComponentComponent implements OnInit {

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
