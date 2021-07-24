import { Component, OnInit } from '@angular/core';
import { CarsFacadeService } from '../../services/cars-facade.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss'],
})
export class CarsPageComponent implements OnInit {
  public cars$ = this.carsFacadeService.cars$;
  public isLoading$ = this.carsFacadeService.isLoading$;
  public tableHeaders = ['Name', 'Price', 'Wheels'];

  constructor(private readonly carsFacadeService: CarsFacadeService) {}

  ngOnInit(): void {}

  public loadCars(): void {
    this.carsFacadeService.getAll();
  }
}
