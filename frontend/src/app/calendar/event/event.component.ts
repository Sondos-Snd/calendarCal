import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { UpdateEventComponent } from './update-event/update-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {  

  @Input() event: any = {};
  @Input() ressRef: any ="";
  @Input() index: any ="";
  @Input() closebutton: any='';

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @Output() inEvent: any = false;

  constructor(private modalService: NgbModal) { }

  openEditModal(event:Event,index:number) {
    this.inEvent=true;
    var modalRef = this.modalService.open(UpdateEventComponent);
    modalRef.componentInstance.event = event;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
      this.passEntry.emit(receivedEntry.data);
      })
}

}
