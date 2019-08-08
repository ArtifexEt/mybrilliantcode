import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from './views/home-view/home-view.component';
import {DetailsViewComponent} from './views/details-view/details-view.component';
import {FormViewComponent} from './views/form-view/form-view.component';
import {TermsViewComponent} from './views/terms-view/terms-view.component';
import {LoginRequiredViewComponent} from "./views/login-required-view/login-required-view.component";
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import { customClaims } from '@angular/fire/auth-guard';
import {pipe} from "rxjs";
import {map} from "rxjs/operators";

const admin = () => pipe(
  customClaims,
  map(claims => claims.admin === true) //add redirect
);

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'view/:id',
    component: DetailsViewComponent,
  },
  {
    path: 'add',
    component: FormViewComponent,
  },
  {
    path: 'terms',
    component: TermsViewComponent,
  },
  {
    path: 'login-required',
    component: LoginRequiredViewComponent,
  },
  {
    path: 'admin',
    loadChildren : () => import('./views/admin-view/admin.module').then(module => module.AdminModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: admin },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
