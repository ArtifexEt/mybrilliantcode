import { Component, OnInit } from '@angular/core';
import {AuthenticationType} from "../../../services/authentication/authentication-type.enum";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {MatBottomSheetRef} from "@angular/material";

@Component({
  selector: 'app-login-sheet',
  templateUrl: './login-sheet.component.html',
  styleUrls: ['./login-sheet.component.scss']
})
export class LoginSheetComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private bottomSheetRef: MatBottomSheetRef<LoginSheetComponent>) { }

  ngOnInit() {
  }

  loginByFacebook() {
    this.authenticationService.login(AuthenticationType.Facebook);
    this.bottomSheetRef.dismiss();
  }

  loginByGoogle() {
    this.authenticationService.login(AuthenticationType.Google);
    this.bottomSheetRef.dismiss();
  }


}
