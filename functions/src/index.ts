//import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// Set admin privilege on the user corresponding to uid.
import * as admin from 'firebase-admin';


function setAsAdmin(uid: string): void{
  admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
    // The new custom claims will propagate to the user's ID token the
    // next time a new one is issued.
  });
}



