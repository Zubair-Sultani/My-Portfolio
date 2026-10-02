'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-intro">
          <div className="section-heading">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Let’s talk about what you’re building.</h2>
            <p className="section-description">
              For freelance work, collaboration, or an opportunity, send a short message with a little context about what you need.
            </p>
          </div>
        </div>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            setStatus('sending');
            setErrorMessage('');

            const form = event.currentTarget;
            const formData = new FormData(form);
            const payload = {
              name: formData.get('name')?.toString() ?? '',
              email: formData.get('email')?.toString() ?? '',
              message: formData.get('message')?.toString() ?? ''
            };

            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              });

              const body = await response.json().catch(() => ({}));
              if (!response.ok) {
                const validationErrors = body.errors?.map((error) => error.message).join(' ');
                setErrorMessage(body.error || validationErrors || 'Unable to submit the form.');
                setStatus('error');
                return;
              }
              setSubmitted(true);
              setStatus('success');
              form.reset();
            } catch (err) {
              setErrorMessage('Network error. Please try again later.');
              setStatus('error');
            }
          }}
          className="contact-form"
          aria-label="Send a contact message"
        >
          <label className="contact-field">
            Name
            <input name="name" required className="contact-input" placeholder='Enter your name here'/>
          </label>
          <label className="contact-field">
            Email
            <input name="email" type="email" required className="contact-input"placeholder='Enter your email here' />
          </label>
          <label className="contact-field">
            Message
            <textarea name="message" required rows={5} className="contact-textarea" />
          </label>
          <button type="submit" className="contact-button" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : submitted ? 'Message Sent' : 'Send Message'}
          </button>
          {status === 'success' && <p role="status" className="contact-feedback contact-feedback-success">Thank you! I’ll get back to you shortly.</p>}
          {status === 'error' && <p role="alert" className="contact-feedback contact-feedback-error">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}
