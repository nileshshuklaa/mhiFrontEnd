import { Component, OnInit, Input } from '@angular/core';
import { Personality } from '../shared/personality.model';

@Component({
  selector: 'third-home-column-component',
  templateUrl: './third-home-column-component.component.html',
  styleUrls: ['./third-home-column-component.component.css']
})
export class ThirdHomeColumnComponent implements OnInit {
@Input() personality: Personality = new Personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
    6 );

  constructor() { }

  ngOnInit() {
  }

}
