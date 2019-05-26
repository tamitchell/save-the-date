const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();
const database = admin.database().ref('/users');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



const getUsersFromDatabase = (res) => {
    let users = [];
  
    return database.on('value', (snapshot) => {
      snapshot.forEach((user) => {
        users.push({
          id: user.key,
          user: user.val()
        });
      });   
      res.status(200).json(users);
    }, (error) => {
      res.status(error.code).json({
        message: `Something went wrong. ${error.message}`
      })
    })
  };
  
  exports.addGuest = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'POST') {
        return res.status(401).json({
          message: 'Not allowed'
        })
      };
      const user = req.body.user;
      database.push({ user });
      getUsersFromDatabase(res)
    });
  });
  
  exports.getUsers = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'GET') {
        return res.status(401).json({
          message: 'Not allowed'
        });
      };
      getUsersFromDatabase(res)
    });
  });

  exports.deleteGuest = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'DELETE') {
        return res.status(401).json({
          message: 'Not allowed'
        })
      }
      const id = req.query.id
      admin.database().ref(`/users/${id}`).remove()
      getUsersFromDatabase(res)
    })
  })

//   exports.getSingleUser = functions.https.onRequest((req, res) => {
//     return cors(req, res, () => {
//       if(req.method !== 'GET') {
//         return res.status(404).json({
//           message: 'Not allowed'
//         })
//       }
  
//       let user = new Set();
//       const id = req.query.id
//         return admin.database().ref(`/user/${id}`).once("value", retrievedUser => {
//           user = user.has(retrievedUser.val())
//       }), ((error) => {
//         res.status(error.code).json({
//           message: `Something went wrong. ${error.message}`
//         })
//       });
//     })})