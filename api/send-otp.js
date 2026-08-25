const twilio = require("twilio");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const { phone, method } = req.body || {};

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required"
      });
    }

    const digits = String(phone).replace(/\D/g, "");

    let twilioPhone = "";

    if (digits.length === 10) {
      twilioPhone = "+1" + digits;
    } else if (
      digits.length === 11 &&
      digits.startsWith("1")
    ) {
      twilioPhone = "+" + digits;
    }

    if (!twilioPhone) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number"
      });
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const channel = method === "call" ? "call" : "sms";

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({
        to: twilioPhone,
        channel
      });

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
