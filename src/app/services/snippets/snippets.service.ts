import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Snippet} from './snippet.interface';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {

  constructor(private db: AngularFirestore) {
  }

  public getSnippet$(limit: number): Observable<Snippet[]> {
    return this.db.collection<Snippet>('snippets',ref => ref.limit(limit)).snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Snippet;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }))
  }

  public addSnippet(snippet: Snippet): void {
    this.db.collection<Snippet>('snippets').add(snippet);
  }

  public getSnippet(id: string): Observable<Snippet> {
    return this.db.doc<Snippet>('snippets/'+id).snapshotChanges()
      .pipe(
        map(actions => {
            const data = actions.payload.data() as Snippet;
            const id = actions.payload.id;
            return {id, ...data};
        }))
  }
}

