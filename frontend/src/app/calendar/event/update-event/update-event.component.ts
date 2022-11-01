import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  @Input() event:any;

  @Output() emitService = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.event);  
    
  }

  emitEvent() {
      this.emitService.next(this.event)
  }


}
