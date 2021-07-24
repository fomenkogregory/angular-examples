import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarsStoreService {
  private readonly _cars = new BehaviorSubject<Car[]>([]);
  private readonly _isLoading = new BehaviorSubject<boolean>(false);

  readonly cars$ = this._cars.asObservable();
  readonly isLoading$ = this._isLoading.asObservable();

  setCars(cars: Car[]): void {
    this._cars.next(cars);
  }

  setIsLoading(isLoading: boolean): void {
    this._isLoading.next(isLoading);
  }
}
