import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { Product } from '../models/product';
import { ModalConfirmationComponent } from 'src/app/shared/modal-confirmation/modal-confirmation.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

	@Input () products: Product[] = [];
	@Output () deletedProduct = new EventEmitter<string>();
  @ViewChild(ModalConfirmationComponent) private modalConfirmation: ModalConfirmationComponent;

	private selectedProductId: string;

	deleteProduct = (id: string) => {
		this.selectedProductId = id;
		this.modalConfirmation.open();
	}

	deleteProductConfirmed = () => {
		this.deletedProduct.emit(this.selectedProductId);
	}

}
