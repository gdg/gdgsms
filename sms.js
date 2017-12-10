'use strict';
module.exports = gdgsms;

/*!
 * moda_c <https://github.com/gdg/moda_c>
 *
 * Copyright © 2017 GDG™ -- (GDG/Tarek Al-Hariri).
 * Licensed under the OSL-3.0 License
 */

/**
 * GDG™ twilio comm module
 * used for general communication
 * classification: general-2/sensitive-1
 *
 */
var dotenv = require('dotenv')
require('dotenv').config()
function gdgsms(smsbody,smsrecipient) {


var p = {
	A: process.env.TWILIO_PHONE_NUMBER_1,
	B: process.env.TWILIO_PHONE_NUMBER_2,
	C: process.env.TWILIO_PHONE_NUMBER_3,
	D: process.env.TWILIO_PHONE_NUMBER_4,
	E: process.env.TWILIO_PHONE_NUMBER_5,
	F: process.env.TWILIO_PHONE_NUMBER_6,
	G: process.env.TWILIO_PHONE_NUMBER_7,
	H: process.env.TWILIO_PHONE_NUMBER_8,
	I: process.env.TWILIO_PHONE_NUMBER_9
};
var PAcc = process.env.TWILIO_ACCOUNT_SID;
var pTky = process.env.TWILIO_AUTH_TOKEN;
var pRc1 = process.env.CELL_PHONE_NUMBER_3;
var pRc2 = process.env.CELL_PHONE_NUMBER_3;
var pBod = "GDG™ just sent you an Node.js sms using the GeoDes Cloud!"
// if (smsbody == undefined) {
// 	;
// } else {
// 	var pBod = smsbody;
// };
// if (smsrecipient == undefined) {
// 	var smsRcpt = pRc1; 
// } else {
// 	var smsRcpt = smsrecipient;
// };
var client = require('twilio')(PAcc,pTky);
client.messages.create({
  from: p.A,
  to: pRc2,
  body: pBod
}).then((message) => console.log(message.sid));
// };


// ******** administrators.json ********
// [
//   {
//     "phoneNumber": "+15557778888",
//     "name": "Doraj"
//   },
//   {
//     "phoneNumber": "+14447778888",
//     "name": "Nivek"
//   }
// ]
// *************************************

// var fs = require('fs');
// var admins = require('../config/administrators.json');

// function formatMessage(errorToReport) {
//   return '[This is a test] ALERT! It appears the server is' +
//     'having issues. Exception: ' + errorToReport +
//     '. Go to: http://newrelic.com ' +
//     'for more details.';
// };

// exports.notifyOnError = function(appError, request, response, next) {
//   admins.forEach(function(admin) {
//     var messageToSend = formatMessage(appError.message);
//     twilioClient.sendSms(admin.phoneNumber, messageToSend);
//   });
//   next(appError);
// };