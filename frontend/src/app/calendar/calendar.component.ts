import { Component, Input, OnChanges , SimpleChanges,OnInit} from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../Services/event.service';
import { ResourceService } from '../Services/resource.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit,OnChanges {

  @Input() selectedDate: any ='';

  todayDtae=moment().format('D/M/YYYY');
  timeScale: string[] =["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"];
  events: any[] = [];
  resources : any[] = [];
  
  constructor(private eventService:EventService, private resourceService:ResourceService,private route: Router,private actRoute: ActivatedRoute) { 
    }

  ngOnInit(): void {    
    this.refetchData(this.todayDtae);
  }

  ngOnChanges(changes:SimpleChanges){
    this.refetchData(this.selectedDate)
  }

  refetchData(selectedDate:any){
    this.events = this.eventService.getEvents(selectedDate);
    this.resources = this.resourceService.getResources(selectedDate);
  }


}
