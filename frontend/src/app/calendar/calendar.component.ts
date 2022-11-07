import { Component, Input, OnChanges ,OnInit} from '@angular/core';
import * as moment from 'moment';
import { EventService } from '../Services/event.service';
import { ResourceService } from '../Services/resource.service';
import { DataTablesModule } from 'angular-datatables';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEventComponent } from './add-event/add-event.component';
import { DataTableDirective } from 'angular-datatables';

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

  // @ViewChild('eventEelement') eventEelement; 

  inEvent:any='';

  todayDate=moment().format('D/M/YYYY');
  events: any[] = [];
  resources : any[] = [];

  constructor(private eventService:EventService,private modalService: NgbModal, private resourceService:ResourceService) { 
    }

  ngOnInit(): void {    
    this.refetchData(this.todayDate);    
  }

  ngOnChanges(){
    this.refetchData(this.selectedDate)
  }

  refetchData(selectedDate:any){    
    this.events = this.eventService.getEvents(selectedDate);
    this.resources = this.resourceService.getResources(selectedDate);
  }

  openCreateModal(i:any,j:any,resource:string,date:string) {  
    var modalRef = this.modalService.open(AddEventComponent); 
    modalRef.componentInstance.resource = resource;
    modalRef.componentInstance.index = i;
    modalRef.componentInstance.indexQuart = j;
    modalRef.componentInstance.date = date;
   
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
      this.refetchData(this.selectedDate);    
      })
  }


}
