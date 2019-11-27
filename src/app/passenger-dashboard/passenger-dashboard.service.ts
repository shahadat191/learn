import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API);
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${PASSENGER_API}/${id}`);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, options);
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
  }

}
