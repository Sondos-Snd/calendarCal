import { Component, Input, OnChanges , SimpleChanges,OnInit} from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../Services/event.service';
import { ResourceService } from '../Services/resource.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEventComponent } from './event/add-event/add-event.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit,OnChanges {

  @Input() selectedDate: any ='';
  @Input() timeScale: any ='';
  @Input() calendarFormat: any='perDay';
  @Input() eventTypes: any='';

  todayDate=moment().format('D/M/YYYY');
  events: any[] = [];
  resources : any[] = [];
  
  constructor(private eventService:EventService,private modalService: NgbModal, private resourceService:ResourceService,private route: Router,private actRoute: ActivatedRoute) { 
    }

  ngOnInit(): void {    
    this.refetchData(this.todayDate);
    console.log(this.selectedDate);   
    
  }

  ngOnChanges(changes:SimpleChanges){
    this.refetchData(this.selectedDate)
  }

  refetchData(selectedDate:any){    
    this.events = this.eventService.getEvents(selectedDate);
    this.resources = this.resourceService.getResources(selectedDate);
  }

  openCreateModal(resource:string,date:string) {    
    var modalRef = this.modalService.open(AddEventComponent); 
    modalRef.componentInstance.resource = resource;
    modalRef.componentInstance.date = date;
    modalRef.componentInstance.emitService.subscribe((emmitedValue:any) => {
        console.log(emmitedValue);        
    });
  }


}
