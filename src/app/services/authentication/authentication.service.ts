import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthenticationType} from "./authentication-type.enum";
import {auth, User, UserInfo} from "firebase";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser$: BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(null);

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged((user: User) => {
      if (user) {
        this.currentUser$.next(user);
      } else {
        this.currentUser$.next(null);
      }
    });
  }

  login(type: AuthenticationType) {
    if (type == AuthenticationType.Facebook) {
      this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    }

    if (type == AuthenticationType.Google) {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
  }

  getCurrentUser$(): Observable<UserInfo> {
    return this.currentUser$.asObservable();
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
