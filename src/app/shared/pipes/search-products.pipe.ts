import { Pipe, PipeTransform } from '@angular/core';
import {
  IProducts,
  IProductsArr,
} from '../../core/interfaces/products/i-products';

@Pipe({
  name: 'searchProducts',
})
export class SearchProductsPipe implements PipeTransform {
  transform(allProducts: IProductsArr[], value: string): IProductsArr[] {
    return allProducts.filter((e) =>
      e.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
