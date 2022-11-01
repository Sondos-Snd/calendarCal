import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit { 

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
