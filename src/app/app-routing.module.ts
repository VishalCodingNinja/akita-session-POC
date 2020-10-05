import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './session/login/login.component';
import { AuthGuard } from './session/session-guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'dashboard',
		canActivate: [ AuthGuard ],
		component: DashboardComponent
	},
	{
		path: 'login',
		component: LoginComponent
	}
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
