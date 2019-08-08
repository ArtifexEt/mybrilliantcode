import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminViewComponent} from "./admin-view.component";
import { AdminSnippetsViewComponent } from './views/admin-snippets-view/admin-snippets-view.component';
import { AdminUsersViewComponent } from './views/admin-users-view/admin-users-view.component';



@NgModule({
  declarations: [
    AdminViewComponent,
    AdminSnippetsViewComponent,
    AdminUsersViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminViewComponent,
        children: [
          { path: '', component: AdminSnippetsViewComponent },
          { path: 'snippets', component: AdminSnippetsViewComponent },
          { path: 'users', component: AdminUsersViewComponent }
        ]
      }
    ])
  ]
})
export class AdminModule { }
