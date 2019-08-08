// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

exports.setAsAdmin = functions.https.onCall(async (data, context) => {
  if(context.auth && context.auth.token && context.auth.token.admin === true) {
    return setAsAdmin(data.email);
  } else {
    return {
      error: "error"
    }
  }
});

async function setAsAdmin(email: string): Promise<void>{
  const user = await admin.auth().getUserByEmail(email);
  return admin.auth().setCustomUserClaims(user.uid, {
    admin: true
  });
}



