import './globals.css';
import { getSiteUrl } from '../lib/site-url.js';
import WhatsAppButton from '../components/WhatsAppButton';

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: siteUrl,
  alternates: {
    canonical: '/',
  },
  title: 'Zubair Sultani | Software Engineer',
  description: 'Portfolio of Zubair Sultani, a Computer Science student and software developer focused on building practical web applications.',
  icons: {
    icon: '/profile-icon.webp'
  },
  openGraph: {
    url: siteUrl.toString(),
    title: 'Zubair Sultani | Software Engineer',
    description: 'Computer Science student and software developer focused on practical web applications.',
    siteName: 'Zubair Sultani Portfolio',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('portfolio-theme');var systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=saved||(systemDark?'dark':'light')}catch(error){document.documentElement.dataset.theme='light'}})();`
          }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
