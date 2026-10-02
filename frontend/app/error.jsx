'use client';

import { useEffect } from 'react';

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-card">
        <h1 className="error-title">Something went wrong</h1>
        <p className="error-text">An unexpected error occurred. Refresh the page or try again later.</p>
      </div>
    </main>
  );
}
