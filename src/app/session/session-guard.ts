import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionQuery } from './state/session.query';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard {
	constructor(private router: Router, private sessionQuery: SessionQuery) { }

	canActivate(): boolean {
		if (this.sessionQuery.isLoggedIn()) {
			return true;
		}

		this.router.navigateByUrl('login');
		return false;
	}
}
