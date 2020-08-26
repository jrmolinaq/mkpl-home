import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './interfaces/user.interface';
import { ROLES } from './constants/auth';

import { UserService } from './services/user.service';

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/mkpl-home/app/app.component.html'
})
export class AppComponent implements OnInit {
	// TODO se quita asincrono $userProfile: Observable<User>;
	userProfile: User;
	userRoles = ROLES;
  
	constructor(private userService: UserService) {}
  
	ngOnInit() {
	  // TODO service this.$userProfile = this.auth0Service.getProfile();
	  this.userProfile = this.userService.getProfile();
	}
}
