import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {  

  @Input() event: any = {};
  @Input() ressRef: any ="";
  @Input() index: any ="";
  @ViewChild('content') content: any;

  closeResult: string = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  open(content:any,event:any,ress:any) {
    const modalRef = this.modalService.open(content);
    modalRef.componentInstance.event = this.event;

  }


  clickEvent(event:any){
    this.content.open();
  }


}
