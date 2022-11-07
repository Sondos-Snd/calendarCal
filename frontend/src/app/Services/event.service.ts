import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import * as moment from 'moment';
import { json } from 'stream/consumers';


const baseUrl = 'http://localhost:8081/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  fullEvents=[
    {
      indexStart:2,
      indexEnd:3,
      title: 'first event',
      startEvent: '04/11/2022 10:00',
      endEvent:
        '02/11/2022 11:00',
      resourceId: 1,
      ressName:"Ress 1",
      type:'workEvent'
    },
    {
      indexStart:2,
      indexEnd:3,
      title: 'second event',
      startEvent: '04/11/2022 11:00',
      endEvent:
        '02/11/2022 12:00',
      resourceId: 2,
      ressName:"Ress 2",
      type:'breakEvent'
    },
    {
      indexStart:2,
      indexEnd:3,
      title: 'third event',
      startEvent: '04/11/2022 09:00',
      endEvent:
        '02/11/2022 10:00',
      resourceId: 2,
      ressName:"Ress 2",
      type:'workEvent'
    },

  ];

  startHour:any=''
  startQuart:any=''
  endHour:any=''
  endQuart:any=''

  assignIndex(events:any){
    

    for (let obj in events){

      let startHour=events[obj]['startEvent'].split(' ')[1].toString();
      let endHour=events[obj]['endEvent'].split(' ')[1].toString();
  
      let dict=[{
        hour:"08:00",
        index:1,
      },
      {
        hour:"09:00",
        index:2,
      },{
        hour:"10:00",
        index:3,
      },
      {
        hour:"11:00",
        index:4,
      },
      {
        hour:"12:00",
        index:5,
      },
      {
        hour:"13:00",
        index:6,
      },
      {
        hour:"14:00",
        index:7,
      },
      {
        hour:"15:00",
        index:8,
      },
      {
        hour:"16:00",
        index:9,
      },
      {
        hour:"17:00",
        index:10,
      }]
  
      for(let value of dict){
        if(value.hour===startHour){
          events[obj]['indexStart']=value.index;         
        }
        if(value.hour===endHour){
          events[obj]['indexEnd']=value.index;        
        }
     }
    }
   
  }

  constructor(private http: HttpClient) { 
    this.assignIndex(this.fullEvents);
    console.log(this.fullEvents);
    
  }

  public getEvents(selectedDate?:any) { 
    if(selectedDate){
      return this.fullEvents.filter((obj) => {
        return moment(obj.startEvent.split(' ')[0]).isSame(moment(selectedDate));
      });
    }else{
      return this.fullEvents;
    }

  }

  public getAll() {
    // now returns an Observable of Events
    return this.http.get<Event[]>(baseUrl);
  }

  // get(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  getMonths(month:any,year:any){
    var ar = [];
    var start = moment(year+"-"+month,"YYYY-MMM");
    for(var end = moment(start).add(1,'month');  start.isBefore(end); start.add(1,'day')){
        ar.push(start.format('DD/MM/YYYY HH:mm').toString());
    }
    return ar;
}

  create(data:any){
    data=JSON.parse(data);
    console.log(data);
    if(data['Reccurrent']){
      this.getMonths('Nov',2022).forEach( (element) => {
        let obj={
          indexStart:2,
          indexEnd:3,
          title: data["Title"],
          startEvent: element,
          endEvent: element,
          resourceId: 3,
          ressName:"Ress 1",
          type:'reccurrentEvent'
        }  
        this.fullEvents.push(obj);
    });

    }else{

      this.startHour=data["startHour"]
      this.startQuart=data["startQuart"]
      this.endHour=data["endHour"]
      this.endQuart=data["endQuart"]

if(this.endHour){

  let obj={
    indexStart:2,
    indexEnd:3,
    title: data["Title"],
    startEvent: data["startEvent"]+" "+this.startHour.split(':')[0]+this.startQuart,
    endEvent: data["endEvent"]+" "+this.endHour.split(':')[0]+this.endQuart,
    resourceId: 3,
    ressName:"Ress 1",
    type:'breakEvent'
  }  

  console.log('created obj');
  console.log(obj);
  
  
  this.fullEvents.push(obj);

}

    }    
  }

  erase(data:any){

  }

  // update(id, data): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }


}