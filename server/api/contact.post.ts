import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "projectType",
      "message",
    ];
    for (const field of requiredFields) {
      if (!body[field] || !body[field].trim()) {
        throw createError({
          statusCode: 400,
          statusMessage: `Missing required field: ${field}`,
        });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid email format",
      });
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "hello@integrablue.com",
      subject: `New Contact Form Submission - ${body.projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
            ${
              body.company
                ? `<p><strong>Company:</strong> ${body.company}</p>`
                : ""
            }
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${body.projectType}</p>
            ${
              body.budget
                ? `<p><strong>Budget:</strong> ${body.budget}</p>`
                : ""
            }
            ${
              body.timeline
                ? `<p><strong>Timeline:</strong> ${body.timeline}</p>`
                : ""
            }
            ${
              body.referral
                ? `<p><strong>How they heard about us:</strong> ${body.referral}</p>`
                : ""
            }
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${body.message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from the IntegraBlue contact form on ${new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
${body.phone ? `Phone: ${body.phone}` : ""}
${body.company ? `Company: ${body.company}` : ""}

Project Details:
Project Type: ${body.projectType}
${body.budget ? `Budget: ${body.budget}` : ""}
${body.timeline ? `Timeline: ${body.timeline}` : ""}
${body.referral ? `How they heard about us: ${body.referral}` : ""}

Message:
${body.message}

---
Sent from IntegraBlue contact form on ${new Date().toLocaleDateString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error: any) {
    console.error("Contact form error:", error);

    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email. Please try again later.",
    });
  }
});
