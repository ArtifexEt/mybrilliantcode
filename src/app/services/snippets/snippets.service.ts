import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import { Snippet } from './snippet.interface';

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {

  constructor(private db: AngularFirestore) {
  }

  public getSnippets(): Observable<Snippet[]> {
    return this.db.collection<Snippet>('snippets').valueChanges();
  }

  public addSnippet(snippet:Snippet): void{
    this.db.collection<Snippet>('snippets').add(snippet);
  }
}

