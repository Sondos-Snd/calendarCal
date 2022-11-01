import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  itemform:any;
  numberOfItems = 0;
  list: any[] = [];
  public event: EventEmitter<any> = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder, public bsModalRef: BsModalRef) {
   
  }

  ngOnInit() {
    this.itemform = this.formBuilder.group({
      name: ""
    })
  }

  saveToList(form:any) {
    if(form.value){
      this.triggerEvent(form.value.name);
      this.bsModalRef.hide();
    }
    
  }

  triggerEvent(item: string) {
    this.event.emit({ data: item , res:200  });
  }
}
