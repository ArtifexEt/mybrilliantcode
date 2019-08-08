import { Component, OnInit } from '@angular/core';
import {AngularFireFunctions} from "@angular/fire/functions";

@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-users-view.component.html',
  styleUrls: ['./admin-users-view.component.scss']
})
export class AdminUsersViewComponent implements OnInit {

  constructor(private fns: AngularFireFunctions) { }

  ngOnInit() {
  }

  add(email) {
    const callable = this.fns.httpsCallable('setAsAdmin');
    callable({ email }).subscribe(value => {
      console.log(value)
    })
  }

}
