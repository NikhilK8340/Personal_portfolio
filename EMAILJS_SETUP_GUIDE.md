# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to enable the contact form to send real emails.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Once logged in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions:
   - For Gmail: Allow EmailJS to access your Gmail account
   - For Other: Enter SMTP settings
5. Click "Create Service"
6. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template design:

```
Subject: New Message from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click "Save"
5. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" > "General" in the dashboard
2. Find your **Public Key** (e.g., `abc123XYZ456`)
3. Copy it for the next step

## Step 5: Update Your Portfolio Configuration

1. Open `/app/frontend/.env.local` file
2. Replace the placeholder values with your actual keys:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abc123XYZ456
```

3. Save the file

## Step 6: Restart Frontend

After updating the `.env.local` file, restart the frontend:

```bash
sudo supervisorctl restart frontend
```

## Step 7: Test the Contact Form

1. Go to your portfolio website
2. Navigate to the "Contact" section
3. Fill in the contact form with test data
4. Click "Send Message"
5. You should receive a success notification
6. Check your email inbox for the message

## Email Limits (Free Plan)

- **200 emails/month** on the free plan
- Upgrade to paid plans for more emails
- Monitor usage in EmailJS dashboard

## Troubleshooting

### Form submits but no email received
- Check EmailJS dashboard for failed requests
- Verify your service is properly connected
- Check spam/junk folder

### "Failed to Send Message" error
- Verify all three keys are correctly entered in `.env.local`
- Check browser console for specific error messages
- Ensure you restarted the frontend after updating `.env.local`

### Template variables not working
- Make sure template variable names match exactly:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`

## Additional Features

### Auto-reply to Sender
1. In EmailJS dashboard, create a second template for auto-reply
2. Set up auto-reply rules in your email template settings

### Email Notifications to Multiple Recipients
1. In your email service settings, add additional recipient emails
2. Use CC or BCC fields in the template

## Security Notes

- **Never commit `.env.local` to version control** (it's already in .gitignore)
- Your Public Key is safe to expose (it's public)
- Service ID and Template ID are not sensitive
- Keep your account password secure

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Free plan includes email support

---

**Current Status**: EmailJS is integrated but requires your keys to be added to `.env.local` to function.
