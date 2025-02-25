import { Component } from '@angular/core';
import { SliceDataPipe } from '../../../shared/pipes/slice-data.pipe';

@Component({
  selector: 'app-products',
  imports: [SliceDataPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  userName = 'Route Academy Academy Academy Academy';

  stringTrim(data: string): string {
    return data.split(' ').splice(0, 1).join(' ');
  }

  userData = {
    name: 'route',
    age: 25,
    dept: 'IT',
  };
}
