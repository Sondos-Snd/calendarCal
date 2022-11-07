import { Component, OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedDate : any= moment().format("DD/MM/YYYY");
  calendarFormat: any= 'perDay';  
  eventTypes=[
    {'customClass':'workEvent',
    'color':'#739BD5',
    'isReccurrent':false
    },
    {'customClass':'reccurrentEvent',
    'color':'#739BD5',
    'isReccurrent':true
    },
    {'customClass':'breakEvent',
    'color':'#739BD5',
    'isReccurrent':false
      }
    ]
  public slotInterval: number= 30;
  openTime: string= '8:00';
  closeTime: string= '20:00';
  timeScale: any= this.getTimeScale(this.slotInterval,this.openTime,this.closeTime)

  constructor(private route: Router,private actRoute: ActivatedRoute) {    
      
  }
  ngOnInit(): void {

    this.updateSelectedDate();

  }

  updateSelectedDate(){
    let fetchedDate = this.actRoute.snapshot.paramMap.get('date'); 
    
    if (this.isDate(fetchedDate)) {     
      this.selectedDate=fetchedDate ;     
     } else {    
      this.selectedDate = moment().format("DD/MM/YYYY");  
     }
  }
  
  
  decaleDate(dayNumber:any){
    this.selectedDate=moment(this.selectedDate, "DD/MM/YYYY").add(dayNumber, 'days').format("DD/MM/YYYY");
  }

  today(){
    this.selectedDate=moment().format("DD/MM/YYYY"); 
  }

  onChangeDate(selectedDate:any){    
    this.selectedDate=moment(selectedDate,'YYYY-MM-DD').format("DD/MM/YYYY"); 
  }

  updateCalendar(){
    this.selectedDate=moment(this.selectedDate,'YYYY-MM-DD').format("DD/MM/YYYY");     
  }

  isDate(str:any) {    
    var parms = str?.split(/[\.\-\/]/);
    if(parms){
      var yyyy = parseInt(parms[2],10);
      var mm   = parseInt(parms[1],10);
      var dd   = parseInt(parms[0],10);
      var date = new Date(yyyy,mm-1,dd,0,0,0,0);
      return mm === (date.getMonth()+1) && dd === date.getDate() && yyyy === date.getFullYear();
    }
    else{
      return false
    }}

    getTimeScale(slotInterval:number,openTime:string,closeTime:string){
      let x = {
        slotInterval: slotInterval,
        openTime: openTime,
        closeTime: closeTime
      };

      let startTime = moment(x.openTime, "HH:mm");
      let endTime = moment(x.closeTime, "HH:mm");
      let allTimes = [];

      while (startTime < endTime) {
        allTimes.push(startTime.format("HH:mm")); 
        startTime.add(x.slotInterval, 'minutes');
      }

      return allTimes;
    }

    formatCalendar(format:string){
      // perDay , perWeek, agenda
      this.calendarFormat=format;
    }

}