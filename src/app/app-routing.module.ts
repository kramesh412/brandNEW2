import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
// import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

// import {PageNotFoundComponent} from './page-not-found-component/page-not-found-component.component'

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponentComponent },
  // { path: '**', component: LogincomponentComponent },

  { path: 'login', component: LogincomponentComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
