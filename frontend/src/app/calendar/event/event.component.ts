import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { json } from 'stream/consumers';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {  

  @Input() event: any = {};
  @Input() ressRef: any ="";
  @Input() index: any ="";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  openEditModal(event:Event,index:number) { 
    var modalRef = this.modalService.open(UpdateEventComponent);
    modalRef.componentInstance.event = event;
    modalRef.componentInstance.emitService.subscribe((emmitedValue:any) => {
        console.log(emmitedValue);        
    });
}
}
