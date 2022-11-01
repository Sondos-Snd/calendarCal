import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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

  itemList=["Ress 1","Ress 2"];

  bsModalRef: BsModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  open(content:any) {
    const initialState = {
      list: [
        {"tag":'Count',"value":this.itemList.length}
      ]
    };
    const modalRef = this.modalService.open(content);
    modalRef.componentInstance.event = this.event;
  }

}
