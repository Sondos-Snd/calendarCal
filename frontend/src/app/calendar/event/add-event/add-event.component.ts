import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  itemform:FormGroup;
  numberOfItems = 0;
  list: any[] = [];

  
  public event: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.itemform = this.formBuilder.group({
      name: ""
    })
    console.log(this.list)
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
