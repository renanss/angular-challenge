import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
		UsersRoutingModule
  ],
	providers: [
		UsersService
	]
})
export class UsersModule { }
