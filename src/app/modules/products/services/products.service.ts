//Create a service that will be used to fetch the data from the API, but since we are using mocks, we will use the mock data instead.
// Simulate the API call by using the setTimeout function to simulate the delay of the API call.

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { generateProducts } from 'src/app/mocks/products';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	
	constructor() { }

	addProduct(product: Product): Observable<Product> {
		return of(product).pipe(delay(Math.floor(Math.random() * 1000)));
	}

	getProducts(): Observable<Product[]> {
		return of(generateProducts(5, 10)).pipe(delay(Math.floor(Math.random() * 1000)));
	}
}
