import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomEvent } from '../interfaces/event';

const API_URL = `${environment.apiURL}/api`;

@Injectable({
  providedIn: 'root'
})
export class EventService {
  //private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  public getAllEvents(): Observable<CustomEvent[]> {
    return this.http.get<CustomEvent[]>(`${API_URL}/events`);
  }

  public get(id: any): Observable<CustomEvent> {
    return this.http.get<CustomEvent>(`${API_URL}/${id}`);
  }

  public getEventsByDate(date: any): Observable<CustomEvent[]> {
    return this.http.get<CustomEvent[]>(`${API_URL}/date/${date}`);
  }

  public getEventsByTime(time: any): Observable<CustomEvent[]> {
    return this.http.get<CustomEvent[]>(`${API_URL}/time/${time}`);
  }

  public getEventsByTitle(title: any): Observable<CustomEvent[]> {
    return this.http.get<CustomEvent[]>(`${API_URL}/title/${title}`);
  }
}
