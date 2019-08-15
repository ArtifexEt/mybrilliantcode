import { Component, OnInit } from '@angular/core';
import {AngularFireFunctions} from "@angular/fire/functions";
import {UserInfo} from "../../../../services/authentication/user-info";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-users-view.component.html',
  styleUrls: ['./admin-users-view.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminUsersViewComponent implements OnInit {
  userList: UserInfo[];
  columnsToDisplay = ['name', 'email', 'admin'];
  expandedElement: UserInfo | null;

  constructor(private fns: AngularFireFunctions) { }

  ngOnInit() {
    this.updateUsers();
  }

  private updateUsers(): void {
    const callable = this.fns.httpsCallable('getUsers');
    callable({}).subscribe(value => {
      this.userList = value.result;
    })
  }

  setAsAdmin(uid: string) {
    const callable = this.fns.httpsCallable('setAsAdmin');
    callable({ uid }).subscribe(value => {
      this.updateUsers();
    })
  }

}
