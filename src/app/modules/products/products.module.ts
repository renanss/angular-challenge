import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsComponent } from './products.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModalConfirmationComponent
 } from 'src/app/shared/modal-confirmation/modal-confirmation.component';
 
@NgModule({
  declarations: [
		ProductsComponent,
		ProductGridComponent,
		ProductListComponent,
  	AddProductComponent,
		ModalConfirmationComponent
	 ],
  imports: [
    CommonModule,
		NgbModalModule,
		ProductsRoutingModule,
		FormsModule
  ]
})
export class ProductsModule { }
