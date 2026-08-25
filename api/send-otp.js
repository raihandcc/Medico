const twilio = require("twilio");

module.exports = async function handler(req, res) {

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    // Get phone number and verification method from the form
    const { phone, method } = req.body || {};

    // Make sure a phone number was provided
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required"
      });
    }

    // Remove spaces, brackets, dashes, etc.
    const digits = String(phone).replace(/\D/g, "");

    // Convert Canadian / US number to Twilio E.164 format
    // Example: (604) 555-1234 becomes +16045551234
    let twilioPhone = "";

    if (digits.length === 10) {
      twilioPhone = "+1" + digits;
    } else if (
      digits.length === 11 &&
      digits.startsWith("1")
    ) {
      twilioPhone = "+" + digits;
    }

    // Reject invalid phone numbers
    if (!twilioPhone) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number"
      });
    }

    // Connect to Twilio
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    // Use phone call if requested, otherwise SMS
    const channel =
      method === "call"
        ? "call"
        : "sms";

    // Send verification code
    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({
        to: twilioPhone,
        channel: channel
      });

    // Tell the form the OTP was successfully sent
    return res.status(200).json({
      success: true,
      status: verification.status
    });

  } catch (error) {

    console.error("Send OTP error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Unable to send verification code"
    });
  }
};
