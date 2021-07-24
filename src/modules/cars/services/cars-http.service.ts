import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarsHttpService {
  private readonly apiPrefix = '/cars';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return MOCK_HTTP_RESPONSE;
    return this.http.get<Car[]>(this.apiPrefix);
  }
}

const MOCK_HTTP_RESPONSE = of([
  {
    name: 'Toyota',
    price: 1200,
    wheels: 4,
  },
  {
    name: 'BMV',
    price: 2000,
    wheels: 8,
  },
] as Car[]).pipe(delay(200));
