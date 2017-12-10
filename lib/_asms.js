require('dotenv').config()

var dotenv = require('dotenv')
// require('dotenv').config();
// console.log(TWILIO_ACCOUNT_SID);
var client = require('twilio')(
	process.env.,
	process.env.TWILIO_AUTH_TOKEN
	);
client.messages.create({
  from: process.env.TWILIO_PHONE_NUMBER,
  to: process.env.CELL_PHONE_NUMBER,
  body: "GDG™ just sent you an Node.js sms using Twilio!"
}).then((message) => console.log(message.sid));


const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
 
client.messages.create({
  from: process.env.TWILIO_PHONE_NUMBER,
  to: process.env.CELL_PHONE_NUMBER,
  body: "You just sent an SMS from Node.js using Twilio!"
}).then((messsage) => console.log(message.sid));