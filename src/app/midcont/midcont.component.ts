import { Component, OnInit } from '@angular/core';
import { FlexibleService } from '../flexible.service'
@Component({
  selector: 'app-midcont',
  templateUrl: './midcont.component.html',
  styleUrls: ['./midcont.component.css']
})
export class MidcontComponent implements OnInit {

  constructor(public flexibleService:FlexibleService) { }
  
  public alldata:any;
  ngOnInit() {
    this.flexibleService.getAllRecord().subscribe(data => this.alldata = data)
  }

}
