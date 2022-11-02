import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import * as moment from 'moment';


const baseUrl = 'http://localhost:8081/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  fullEvents=[
    {
      index:2,
      title: 'first event',
      startEvent: '02/11/2022 10:00',
      endEvent:
        '02/11/2022 11:00',
      resourceId: 1,
      ressName:"Ress 1",
      type:'workEvent'
    },
    {
      index:3,
      title: 'second event',
      startEvent: '02/11/2022 11:00',
      endEvent:
        '02/11/2022 12:00',
      resourceId: 2,
      ressName:"Ress 2",
      type:'breakEvent'
    },
    {
      index:1,
      title: 'third event',
      startEvent: '02/11/2022 09:00',
      endEvent:
        '02/11/2022 10:00',
      resourceId: 3,
      ressName:"Ress 3",
      type:'workEvent'
    },
    {
      index:6,
      title: 'fourth event',
      startEvent: '02/11/2022 14:00',
      endEvent:
        '02/11/2022 15:00',
      resourceId: 3,
      ressName:"Ress 3",
      type:'reccurrentEvent'
    },
  ];

  constructor(private http: HttpClient) { }

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
    console.log(data['Reccurrent']);
    if(data['Reccurrent']){
      this.getMonths('Nov',2022).forEach( (element) => {
        let obj={
          index:0,
          title: data["Title"],
          startEvent: element,
          endEvent:
          element,
          resourceId: 3,
          ressName:"Ress 1",
          type:'reccurrentEvent'
        }  
        this.fullEvents.push(obj);
    });

    }else{
      let obj={
        index:0,
        title: data["Title"],
        startEvent: moment(data["startEvent"]).format('DD/MM/YYYY HH:mm').toString(),
        endEvent:
        moment(data["startEvent"]).format('DD/MM/YYYY HH:mm').toString(),
        resourceId: 3,
        ressName:"Ress 1",
        type:'breakEvent'
      }  
      this.fullEvents.push(obj);
    }    
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