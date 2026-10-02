import { Router } from 'express';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

router.post('/', async (req, res) => {
  try {
    const payload = contactSchema.parse(req.body);

    const {
      GMAIL_USER,
      GMAIL_APP_PASSWORD,
      CONTACT_EMAIL,
    } = process.env;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_EMAIL) {
      return res.status(503).json({
        success: false,
        error: 'Email delivery is not configured',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: CONTACT_EMAIL,

      // When you click Reply in Gmail,
      // it will reply directly to the person who contacted you.
      replyTo: payload.email,

      subject: `Portfolio Contact: ${payload.name}`,

      text: `
Name: ${payload.name}
Email: ${payload.email}

Message:
${payload.message}
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    console.error('Failed to send contact email:', error);

    return res.status(500).json({
      success: false,
      error: 'Failed to submit contact message',
    });
  }
});

export default router;