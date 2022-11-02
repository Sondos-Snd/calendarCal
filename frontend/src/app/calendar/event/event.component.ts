import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
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
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
      console.log(receivedEntry);
      })
}
}
