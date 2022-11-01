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
      startEvent: '01/11/2022 10:00',
      endEvent:
        '01/11/2022 11:00',
      resourceId: 1,
      ressName:"Ress 1",
    },
    {
      index:3,
      title: 'second event',
      startEvent: '01/11/2022 11:00',
      endEvent:
        '01/11/2022 12:00',
      resourceId: 2,
      ressName:"Ress 2",
    },
    {
      index:1,
      title: 'third event',
      startEvent: '01/11/2022 09:00',
      endEvent:
        '01/11/2022 10:00',
      resourceId: 3,
      ressName:"Ress 3",
    },
    {
      index:6,
      title: 'fourth event',
      startEvent: '18/11/2022 14:00',
      endEvent:
        '10/01/2022 15:00',
      resourceId: 3,
      ressName:"Ress 3",
    },
  ];

  constructor(private http: HttpClient) { }

  public getEvents(selectedDate:any) { 
    return this.fullEvents.filter((obj) => {
      return moment(obj.startEvent.split(' ')[0]).isSame(moment(selectedDate));
    });
  }

  public getAll() {
    // now returns an Observable of Events
    return this.http.get<Event[]>(baseUrl);
  }

  // get(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
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