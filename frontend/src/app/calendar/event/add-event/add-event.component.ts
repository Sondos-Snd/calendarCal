import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event=    {
    index:2,
    title: 'first event',
    startEvent: '01/11/2022 10:00',
    endEvent:
      '01/11/2022 11:00',
    resourceId: 1,
    ressName:"Ress 1",
  }

  @Output() emitService = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    
  }

  emitEvent() {
      this.emitService.next(this.event)
  }


}
