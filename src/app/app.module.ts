import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';
import { TermsViewComponent } from './views/terms-view/terms-view.component';
import { FormViewComponent } from './views/form-view/form-view.component';
import { DetailsViewComponent } from './views/details-view/details-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { MatInputModule } from '@angular/material/input';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MarkdownModule} from "ngx-markdown";
import {HttpClientModule} from "@angular/common/http";
import { SnippetFormComponent } from './views/form-view/snippet-form/snippet-form.component';
import { SnippetAddedComponent } from './views/form-view/snippet-added/snippet-added.component';
import {DisqusModule} from "ngx-disqus";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { LoginSheetComponent } from './components/sheet/login-sheet/login-sheet.component';
import { LoginRequiredViewComponent } from './views/login-required-view/login-required-view.component';
import {AngularFireAuthGuardModule} from "@angular/fire/auth-guard";
import {AngularFireFunctionsModule} from "@angular/fire/functions";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TermsViewComponent,
    FormViewComponent,
    DetailsViewComponent,
    HomeViewComponent,
    SnippetFormComponent,
    SnippetAddedComponent,
    LoginSheetComponent,
    LoginRequiredViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebase),
    MarkdownModule.forRoot(),
    DisqusModule.forRoot('mybrilliantcode'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
