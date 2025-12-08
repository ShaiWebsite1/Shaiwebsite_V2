import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ 1. Create transporter (using Gmail, or use SMTP for custom domain)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use "smtp.office365.com", "sendgrid", etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ 2. Send email to your BD team
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: "naresh.s@shai.health, jahnavi.n@shai.health",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // ✅ 3. Send acknowledgment email to the user (CC your BD email)
    await transporter.sendMail({
      from: `"Shai Health" <${process.env.EMAIL_USER}>`,
      to: email,
      cc: "naresh.s@shai.health, jahnavi.n@shai.health",
      subject: "Thanks for contacting Shai!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank You For Reaching Out To <strong>SHAI</strong>. One of our specialists will contact you soon</p>
        <p><strong>Your submitted details:</strong></p>
        <ul>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Message: ${message}</li>
        </ul>
        <p>Warm regards,<br/>Shai Team</p>
      `,
    });

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
