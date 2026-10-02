import './globals.css';

export const metadata = {
  title: 'Zubair Sultani | Software Engineer',
  description: 'Portfolio of Zubair Sultani, a Computer Science student and software developer focused on building practical web applications.',
  icons: {
    icon: '/profile.jpg'
  },
  openGraph: {
    title: 'Zubair Sultani | Software Engineer',
    description: 'Computer Science student and software developer focused on practical web applications.',
    siteName: 'Zubair Sultani Portfolio',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
