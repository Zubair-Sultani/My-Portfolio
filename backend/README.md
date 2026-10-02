# Backend API

Express + Node.js backend for the premium portfolio.

## Running locally

1. Copy `.env.example` to `.env`
2. Set `GMAIL_USER` to the Gmail account that sends the message and `CONTACT_EMAIL` to the inbox that receives it. These can be the same address.
3. Create a Google App Password with 2-Step Verification enabled and set it as `GMAIL_APP_PASSWORD`. Do not use your regular Google password or commit `.env`.
4. Install dependencies: `npm install`
5. Start dev server: `npm run dev`

## Endpoints

- `POST /api/contact` - send contact messages to `CONTACT_EMAIL` through Gmail SMTP
