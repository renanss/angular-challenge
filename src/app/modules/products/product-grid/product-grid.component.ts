import { Component, Input } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {

	@Input () products: Product[] = [];

	deleteProduct = (id: string) => {
		this.products = this.products.filter(product => product.id !== id);
	}
}
