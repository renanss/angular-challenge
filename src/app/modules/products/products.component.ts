import { Component } from '@angular/core';
import { Product } from './models/product';

import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

	constructor(private productsService: ProductsService) { }

	public products: Product[];

	ngOnInit() {
		this.productsService.getProducts().subscribe(products => this.products = products);
	}

	public addProduct = (product: Product) => {
		this.productsService.addProduct(product).subscribe(() => {
			this.products.push(product);
		});
	}
	
	public deleteProduct = (id: string) => {
		this.products = this.products.filter(product => product.id !== id);
	}
}
