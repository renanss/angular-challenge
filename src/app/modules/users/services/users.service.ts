import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from '../models/user';
import { generateUsers } from 'src/app/mocks/users';
import { generateProducts } from 'src/app/mocks/products';

@Injectable({
	providedIn: 'root'
})
export class UsersService {		
	constructor() { }

	getUsers(): Observable<User[]> {
		return of(generateUsers(5, 10)).pipe(delay(Math.floor(Math.random() * 1000)));
	}

	getUsersProducts(users: User[]): Observable<User[]> {
		for(let user of users) {
			user.purchased_products = generateProducts(5, 10);
		}

		return of(users).pipe(delay(Math.floor(Math.random() * 1000)));
	}

}