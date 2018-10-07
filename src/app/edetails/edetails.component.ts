import { Component, OnInit } from '@angular/core';
import { FlexibleService } from '../flexible.service';
import { ActivatedRoute } from '@angular/router';
import { MidcontComponent } from '../midcont/midcont.component'
@Component({
  selector: 'app-edetails',
  templateUrl: './edetails.component.html',
  styleUrls: ['./edetails.component.css']
})
export class EdetailsComponent implements OnInit {
public emp:any;
  constructor(private flexibleService:FlexibleService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeDetails();
    }
  public getEmployeeDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.flexibleService.getSingleRecord(id).subscribe(data => this.emp = data);
  }
}
