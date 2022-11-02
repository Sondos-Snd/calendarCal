import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  @Input() event:any;

  @Output() emitService = new EventEmitter();

  constructor(public activeModal: NgbActiveModal,private eventService:EventService) {
  }
  eventForm = new FormGroup({
    Title: new FormControl(''),
    Resource: new FormControl('Ress 1'),
    eventType: new FormControl('breakEvent'),
    Reccurrent: new FormControl(''),
    startEvent: new FormControl(''),
    endEvent: new FormControl(''),
  }); 

  ngOnInit(): void {

  }

  closeCustom() {
    this.activeModal.close();
  } 

  save() {
    this.eventService.create((JSON.stringify(this.eventForm.value)));  
    this.emitService.emit({ data: this.eventService.getEvents() , res:200  });  
    this.activeModal.close();
  }

  Erase(){
    this.eventService.erase((JSON.stringify(this.eventForm.value)));  
    this.emitService.emit({ data: this.eventService.getEvents() , res:200  });  
    this.activeModal.close();
  }


}
