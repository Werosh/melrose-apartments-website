# EmailJS Setup Instructions

The contact form uses EmailJS to send emails. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone (optional)
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (info@melroseapartments.com.au)
   - `{{reply_to}}` - Reply-to email (sender's email)

4. Example template:
   ```
   Subject: New Contact Form Message: {{subject}}
   
   From: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```

5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** under API Keys
3. Copy the Public Key

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (same level as `package.json`)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Restart Your Development Server

After creating/updating the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on the Contact page
2. Submit the form
3. Check your email inbox for the message
4. Verify that the email contains all the form data correctly

## Troubleshooting

- **"Email service is not configured"**: Make sure your `.env` file exists and contains all three variables
- **"Failed to send message"**: Check that your EmailJS service is properly connected and your template variables match
- **Email not received**: Check your spam folder and verify your EmailJS service connection

## Security Note

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Your Public Key is safe to use in frontend code (it's designed for client-side use)

