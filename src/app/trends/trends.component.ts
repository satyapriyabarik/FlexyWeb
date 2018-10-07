import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
        
        
    })),
    state('large', style({
        transform: 'scale(1.5)',
    })),
    transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class TrendsComponent implements OnInit {

  constructor() { }
  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
 removeAnimate(){
  this.state = (this.state === 'large' ? 'small' : 'large');
 }
  ngOnInit() {
  }

}
