# Email Setup Guide

This guide will help you configure email functionality for the contact form.

## Option 1: Gmail Setup (Recommended for Development)

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### Step 2: Generate App Password

1. Go to Google Account settings
2. Navigate to Security > 2-Step Verification
3. Click on "App passwords"
4. Generate a new app password for "Mail"
5. Copy the generated password (16 characters)

### Step 3: Create Environment File

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
CONTACT_EMAIL=hello@integrablue.com
```

## Option 2: SendGrid Setup (Recommended for Production)

### Step 1: Create SendGrid Account

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify your domain
3. Create an API key

### Step 2: Configure Environment Variables

```env
# Email Configuration
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
CONTACT_EMAIL=hello@integrablue.com
```

## Option 3: Other SMTP Providers

You can use any SMTP provider. Common options include:

- **Mailgun**: `smtp.mailgun.org`
- **Postmark**: `smtp.postmarkapp.com`
- **Amazon SES**: `email-smtp.us-east-1.amazonaws.com`

Update the environment variables accordingly:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASS=your-password
CONTACT_EMAIL=hello@integrablue.com
```

## Testing the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox for the submission

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**

   - Double-check your SMTP credentials
   - For Gmail, ensure you're using an App Password, not your regular password
   - Verify 2-factor authentication is enabled (for Gmail)

2. **"Connection timeout"**

   - Check your internet connection
   - Verify the SMTP host and port are correct
   - Some networks block SMTP ports - try port 587 or 465

3. **"Email not received"**
   - Check your spam folder
   - Verify the CONTACT_EMAIL address is correct
   - Check server logs for any errors

### Debug Mode

To enable debug logging, add this to your `.env` file:

```env
DEBUG_EMAIL=true
```

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive information
- Consider using a dedicated email service for production
- Implement rate limiting for the contact form API endpoint

## Production Considerations

For production deployment:

1. Use a dedicated email service (SendGrid, Mailgun, etc.)
2. Implement proper error handling and logging
3. Add rate limiting to prevent spam
4. Consider using a queue system for email processing
5. Set up email delivery monitoring
