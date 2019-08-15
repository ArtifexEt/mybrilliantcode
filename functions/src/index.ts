// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

export const setAsAdmin = functions.https.onCall(async (data, context) => {
  if (!isAdmin(context)) {
    return { error: `Unauthorized.` }
  }

  return _setAsAdmin(data.uid);
});

export const getUsers = functions.https.onCall((data, context) => {
  if (!isAdmin(context)) {
    return { error: `Unauthorized.` }
  }

  return admin
    .auth()
    .listUsers()
    .then((listUsersResult) => {
      const result = listUsersResult.users.map((user) => {
        const { uid, email, photoURL, displayName, disabled, customClaims } = user;
        return { uid, email, picture: photoURL, name: displayName, disabled, ...customClaims}
      });

      return { result }

    })
    .catch((error) => {
      return { error: 'Error listing users' }
    })
});

async function _setAsAdmin(uid: string): Promise<void>{
  return admin.auth().setCustomUserClaims(uid, {
    admin: true
  });
}

function isAdmin(context: any): boolean {
  return context.auth && context.auth.token && context.auth.token.admin === true;
}



