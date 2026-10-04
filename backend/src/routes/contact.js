import { Router } from 'express';
import { z } from 'zod';
import { Resend } from 'resend';

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  try {
    const payload = contactSchema.parse(req.body);

    // Get environment variables
    const {
      RESEND_API_KEY,
      CONTACT_EMAIL,
      RESEND_FROM_EMAIL
    } = process.env;

    // Check that email configuration exists
    if (!RESEND_API_KEY || !CONTACT_EMAIL || !RESEND_FROM_EMAIL) {
      console.error('Missing email environment variables');

      return res.status(503).json({
        success: false,
        error: 'Email delivery is not configured',
      });
    }

    // Create Resend instance here
    const resend = new Resend(RESEND_API_KEY);

    // Send email
    const { data, error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: payload.email,
      subject: `Portfolio Contact: ${payload.name}`,
      text: `
Name: ${payload.name}
Email: ${payload.email}

Message:
${payload.message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return res.status(500).json({
        success: false,
        error: 'Failed to send contact email',
      });
    }

    console.log('Email sent:', data?.id);

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