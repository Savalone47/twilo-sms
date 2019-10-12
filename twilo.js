// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const accountSid = 'AC5e8602a43b557c3b4c0994ea6ae321f5',
      authToken = 'bcf31b892ea830fbdf96c29c873f5523',
      client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Welcome to the First LocalHackDay MLH DRC',
     from: '+12014318027',
     to: '+243991534516'
   })
  .then(message => console.log(message.sid));