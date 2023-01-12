import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';

const routes: Routes = [
	{
		path: 'products',
		loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
	},
	{
		path: 'users',
		loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
	},
	{
		path: '**',
		redirectTo: 'products'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
