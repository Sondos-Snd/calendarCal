import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EventService } from 'src/app/Services/event.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  @Input() resource:any;
  @Input() date:any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  preview: string = '';

  constructor(private eventService:EventService,public activeModal: NgbActiveModal) {
  }

  eventForm = new FormGroup({
    Title: new FormControl(''),
    Resource: new FormControl('Ress 1'),
    eventType: new FormControl('breakEvent'),
    Reccurrent: new FormControl(''),
    startEvent: new FormControl(''),
    endEvent: new FormControl(''),
  }); 

  closeCustom() {
    this.activeModal.close();
  }  

  save() {
    this.eventService.create((JSON.stringify(this.eventForm.value)));  
    this.passEntry.emit({ data: this.eventService.getEvents() , res:200  });  
    this.activeModal.close();
  }

  ngOnInit(): void {
    
  }
}
