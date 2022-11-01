import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

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
