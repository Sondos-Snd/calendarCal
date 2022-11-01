import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/api/ressources';
@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  selectedDate:any;

  constructor(private http: HttpClient) { }

  getResources(selectedDate:any) {
    return [
      {
        id:1,
        name: "Ress 1",
        description: "sthg",
        ressgroup: "sthg",
      },
      {
        id:2,
        name: "Ress 2",
        description: "sthg",
        ressgroup: "sthg",
      },
      {
        id:3,
        name: "Ress 3",
        description: "sthg",
        ressgroup: "sthg",
      },
    ];
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
