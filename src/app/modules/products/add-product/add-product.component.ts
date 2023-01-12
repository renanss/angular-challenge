import { Component, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

	@Output() addedProduct = new EventEmitter<Product>();

	public product: Product;
	public modal: boolean = false;

	public addProduct = () => {
		if(!this.product.name || !this.product.description || !this.product.price) return;

		this.addedProduct.emit(this.product);
	}

	public openModal = () => {
		this.product = {
			id:  Math.random().toString(36).substr(2, 9),
			name: '',
			description: '',
			price: 0,
			image: `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}}`,
		};
		this.modal = true;

	}
}
