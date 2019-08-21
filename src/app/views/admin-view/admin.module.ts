import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminViewComponent} from "./admin-view.component";
import { AdminSnippetsViewComponent } from './views/admin-snippets-view/admin-snippets-view.component';
import { AdminUsersViewComponent } from './views/admin-users-view/admin-users-view.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {MatButtonModule, MatTableModule, MatIconModule} from "@angular/material";
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AdminViewComponent,
    AdminSnippetsViewComponent,
    AdminUsersViewComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    AdminRoutingModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class AdminModule { }
