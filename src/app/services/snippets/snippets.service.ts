import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {

  constructor(private db: AngularFirestore) {
  }

  public getSnippets(): Observable<any> {
    return this.db.collection('snippets').valueChanges();
  }
}
