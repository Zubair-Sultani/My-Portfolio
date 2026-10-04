import './globals.css';
import { getSiteUrl } from '../lib/site-url.js';
import WhatsAppButton from '../components/WhatsAppButton';

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL("https://my-portfolio-sultani4.vercel.app"),

  title: {
    default: "Zubair Sultani | Software Engineer & Full-Stack Developer",
    template: "%s | Zubair Sultani",
  },

  description:
    "Zubair Sultani is a Software Engineer and Full-Stack Developer specializing in web technologies, React, Node.js, Express.js, MongoDB, and modern software development.",

      verification: {
    google: "WXZLnn-GpiC0WS-3ENBKgdINEeO7pxpECZegcBjBn0M",
  },

  keywords: [
    "Zubair Sultani",
    "Zubair Sultani pashai",
    "Zubair Sultani Software Engineer",
    "Zubair Sultani Full Stack Developer",
    "Zubair Sultani Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
  ],

  authors: [
    {
      name: "Zubair Sultani",
    },
  ],

  creator: "Zubair Sultani",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Zubair Sultani | Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Zubair Sultani, Software Engineer and Full-Stack Developer.",
    url: "https://my-portfolio-sultani4.vercel.app",
    siteName: "Zubair Sultani Portfolio",
    type: "website",
  },
};


const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zubair Sultani",
  url: "https://my-portfolio-sultani4.vercel.app",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/Zubair-Sultani/",
    "https://www.linkedin.com/in/zubair-sultani-5246743ab/"
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
