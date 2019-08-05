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

import {MarkdownModule} from "ngx-markdown";
import {HttpClientModule} from "@angular/common/http";
import { SnippetFormComponent } from './views/form-view/snippet-form/snippet-form.component';
import { SnippetAddedComponent } from './views/form-view/snippet-added/snippet-added.component';
import {DisqusModule} from "ngx-disqus";
import { LoginViewComponent } from './views/login-view/login-view.component';

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
    LoginViewComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    MarkdownModule.forRoot(),
    DisqusModule.forRoot('mybrilliantcode'),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
