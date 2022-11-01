import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  @Input() resource:any;
  @Input() date:any;
  @Output() emitService = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.resource); 
    
  }

  emitEvent() {
      this.emitService.next(this.resource)
  }


}
