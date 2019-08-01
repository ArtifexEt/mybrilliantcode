import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from './views/home-view/home-view.component';
import {DetailsViewComponent} from './views/details-view/details-view.component';
import {FormViewComponent} from './views/form-view/form-view.component';
import {TermsViewComponent} from './views/terms-view/terms-view.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
