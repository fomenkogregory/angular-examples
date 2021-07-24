import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CarsPageComponent],
  exports: [CarsPageComponent],
  imports: [CommonModule, HttpClientModule],
})
export class CarsModule {}
