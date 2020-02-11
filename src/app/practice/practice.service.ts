import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Passenger} from '../passenger-dashboard/models/passenger.interface';

export interface Article {
  id: number;
  title: string;
  article: string;
}
const PASSENGER_API = 'http://localhost:3000/articles';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private httpClient: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(PASSENGER_API);
  }


}
