# Backend Email API

Express + Node.js API used to deliver portfolio contact-form submissions by email.

## Running locally

1. Copy `.env.example` to `.env`
2. Set `GMAIL_USER` to the Gmail account that sends the message and `CONTACT_EMAIL` to the inbox that receives it. These can be the same address.
3. Create a Google App Password with 2-Step Verification enabled and set it as `GMAIL_APP_PASSWORD`. Do not use your regular Google password or commit `.env`.
4. Install dependencies: `npm install`
5. Start dev server: `npm run dev`

## Deployment

Deploy this API separately from the frontend and configure `PORT`, `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_EMAIL` in the backend host's environment settings. Keep SMTP credentials on the backend; never add them to frontend or `NEXT_PUBLIC_*` variables.

Set `BACKEND_URL` in the Vercel project to this API's public base URL, without a trailing slash. The existing Next.js rewrite forwards `/api/contact` requests to `${BACKEND_URL}/api/contact`. For local development, it defaults to `http://localhost:4000`.

## Endpoints

- `POST /api/contact` - send contact messages to `CONTACT_EMAIL` through Gmail SMTP
