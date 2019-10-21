import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
