// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACb496dc7f5093df0116166578454c8a90";
const authToken = "c6d9bd4f183a05c17a2bed0a8e2d8648";
const client = require('twilio')(accountSid, authToken);

client.verify.services('XXXXXXXXXXXXXXXXX')
             .verifications
             .create({to: '+919547271228', channel: 'sms'})
             .then(verification => console.log(verification.sid));
