import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user';

import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

	constructor(private usersService: UsersService, private router: Router) { }

	public users: User[];

	ngOnInit() {
		this.usersService.getUsers().subscribe(users =>{ 
			this.users = users 
			this.usersService.getUsersProducts(this.users).subscribe(users => this.users = users);
		});
	}

	public userDetails = (user: User) => {
		this.router.navigateByUrl(`/users/details/${user.id}`, {state : user} );	

	}


}
