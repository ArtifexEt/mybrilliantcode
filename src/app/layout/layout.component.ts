import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthenticationService} from "../services/authentication/authentication.service";
import {UserInfo} from "firebase";
import {MatBottomSheet} from "@angular/material";
import {LoginSheetComponent} from "../components/sheet/login-sheet/login-sheet.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<UserInfo>;
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver,
              private authenticationService: AuthenticationService,
              private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );

    this.user$ = this.authenticationService.getCurrentUser$();
  }

  signOut() {
    this.authenticationService.signOut();
  }

  login(): void {
    this.bottomSheet.open(LoginSheetComponent);
  }

}
