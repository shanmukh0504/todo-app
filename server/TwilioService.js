//TwilioServer.js
import twilio from 'twilio';

// Your Twilio credentials
const accountSid = YOUR_SSID;
const authToken = YOUR_AUTH_TOKEN;
const twilioPhoneNumber = YOUR_TWILIO_PHNO;

// Create Twilio client
const client = twilio(accountSid, authToken);

// Function to make a call using Twilio
export const makeCall = async (to) => {
    try {
        const call = await client.calls.create({
            twiml: `<Response><Say>Your task deadline is approaching. Please complete it soon.</Say><Pause/><Gather input="dtmf" numDigits="1" timeout="0" /></Response>`,
            to,
            from: twilioPhoneNumber,
        });
        console.log('Call SID:', call.sid); // Log the call SID for reference
        return call.sid;
    } catch (error) {
        console.error('Error making call:', error);
        throw error;
    }
};
