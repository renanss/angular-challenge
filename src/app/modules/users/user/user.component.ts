import { Component } from '@angular/core';

import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

	public user: User;

	state: any;

	ngOnInit() {
		//This was intentionally made due to the requirements of the challenge. Should be avoided in production.
		const _user = history.state
		this.user = _user
	}

}
