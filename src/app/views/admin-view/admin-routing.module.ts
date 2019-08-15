import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminViewComponent} from "./admin-view.component";
import {AdminSnippetsViewComponent} from "./views/admin-snippets-view/admin-snippets-view.component";
import {AdminUsersViewComponent} from "./views/admin-users-view/admin-users-view.component";

const routes: Routes = [
  { path: '', component: AdminViewComponent,
    children: [
      { path: '', component: AdminSnippetsViewComponent },
      { path: 'snippets', component: AdminSnippetsViewComponent },
      { path: 'users', component: AdminUsersViewComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
