import { NextResponse } from "next/server";
import { Resend } from "resend";

// Provide default values for environment variables
const resendApiKey = process.env.RESEND_API_KEY || "your_default_api_key";
const fromEmail = process.env.FROM_EMAIL || "your_default_email@example.com";

const resend = new Resend(resendApiKey);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
  // Check if email, subject, and message are valid
  if (!email || !subject || !message) {
    return NextResponse.error(new Error("Invalid request. Missing email, subject, or message."));
  }

  try {
    // Send email
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["deepvyas2003@gmail.com"], // Replace with the dummy email address
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // Return response
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors
    console.error("Error sending email:", error);
    return NextResponse.error(new Error("Failed to send email."));
  }
}
