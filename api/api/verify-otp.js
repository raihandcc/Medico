const twilio = require("twilio");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const { phone, code } = req.body || {};

    if (!phone || !code) {
      return res.status(400).json({
        success: false,
        message: "Phone number and code are required"
      });
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: phone,
        code: code
      });

    return res.status(200).json({
      success: verification.status === "approved",
      status: verification.status
    });

  } catch (error) {
    console.error("Verify OTP error:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
