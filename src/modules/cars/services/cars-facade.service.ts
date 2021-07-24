import { Injectable } from '@angular/core';
import { CarsStoreService } from './cars-store.service';
import { CarsHttpService } from './cars-http.service';

@Injectable({
  providedIn: 'root',
})
export class CarsFacadeService {
  public cars$ = this.store.cars$;
  public isLoading$ = this.store.isLoading$;

  constructor(
    private readonly store: CarsStoreService,
    private readonly http: CarsHttpService
  ) {}

  getAll(): void {
    this.store.setIsLoading(true);
    this.http.getAll().subscribe((cars) => {
      this.store.setCars(cars);
      this.store.setIsLoading(false);
    });
  }
}
