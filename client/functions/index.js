const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();
const database = admin.database().ref('/users');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});
const APP_NAME = `Dana Brown's 2019 Birthday Party`;

exports.sendInviteEmail = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    const email = req.body.email; // The email of the user.
    const displayName = req.body.displayName; // The display name of the user.

    return sendInviteEmail(email, displayName);
  });

  async function sendInviteEmail(email, displayName) {
    const mailOptions = {
      from: `${APP_NAME} <noreply@firebase.com>`,
      to: email,
    };



    mailOptions.subject = `You've been invited: ${APP_NAME}!`;
    mailOptions.text = `Dear ${displayName}, \r\n\r\  \r\n\r\ With great honor, we would like to request for your presence on this coming August 17th, 2019 at 6:30PM for the 55th birthday of Dana Brown. The birthday celebration will take place in the 3319 Shore Dr, Virginia Beach, VA 23451, while the proposed dress code will be semi-formal, with pastel colored attire required. \r\n\r\  \r\n\r\ Please confirm your attendance by signing up at https://save-the-date.surge.sh/. If you need further information of assistance do not hesitate to contact us. \r\n\r\ \r\n\r\ Hoping to meet you in the venue!\r\n\r\ \r\n\r\ Sincerely,\r\n\r\ \r\n\r\ The Collaboration Team at LeFemi Inc`;
    mailOptions.html = `<p>Dear ${displayName},<br></br>With great honor, we would like to request for your presence on this coming August 17th, 2019 at 6:30PM for the 55th birthday of Dana Brown. The birthday celebration will take place in the 3319 Shore Dr, Virginia Beach, VA 23451, while the proposed dress code will be semi-formal, with pastel colored attire required.<br></br>br></br>Please confirm your attendance by signing up at https://save-the-date.surge.sh/. If you need further information of assistance do not hesitate to contact us.<br></br><br></br>Hoping to meet you in the venue!<br></br><br></br>Sincerely,<br></br><br></br>The Collaboration Team at LeFemi Inc</p>`

    try {
      await mailTransport.sendMail(mailOptions);
      res.send(`Email has been sent`);
    } catch (error) {
      res.send('There was an error while sending the email:', error);
    }
    return null;
  }
})

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
    if (req.method !== 'POST') {
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
    if (req.method !== 'GET') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    getUsersFromDatabase(res)
  });
});

exports.deleteGuest = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== 'DELETE') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    const id = req.query.id
    admin.database().ref(`/users/${id}`).remove()
    //   getUsersFromDatabase(res)
    res.send('Guest deleted successfully')
  }), (error) => {
    res.status(error.code).json({
      message: `Something went wrong. ${error.message}`
    })
  }
})
