The error is from your Next.js rewrite, not from Render itself.

Your next.config.mjs probably has something like:

destination: `${process.env.BACKEND_URL}/api/contact`

Vercel is receiving an invalid/empty value for BACKEND_URL, so the destination becomes invalid.

Fix it

Since you're currently deploying the project, the easiest thing is:

Go to Vercel → your project → Settings → Environment Variables.
Check BACKEND_URL.
Make sure the Value is your actual Render URL, for example:
https://premium-portfolio-backend.onrender.com

It must:

start with https://
not have /api/contact at the end
have no quotation marks
have no spaces

So:

BACKEND_URL=https://premium-portfolio-backend.onrender.com

Then make sure Production is selected.

Then redeploy

Go to:

Deployments → failed deployment → Redeploy

One important check

Your error shows:

"destination":"[REDACTED]/api/contact"

This suggests Vercel is seeing a value, but we should verify your config.

Your next.config.mjs should look approximately like:

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/contact",
        destination: `${process.env.BACKEND_URL}/api/contact`,
      },
    ];
  },
};

export default nextConfig;

If you paste your frontend/next.config.mjs here, I can tell you exactly what needs to be changed.

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/contact',
        destination: ${process.env.BACKEND_URL || 'http://localhost:4000'}/api/contact
      }
    ];
  },
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;


Your next.config.mjs is correct. The problem is almost certainly the format/value of BACKEND_URL in Vercel.

Your code does this:

destination: `${process.env.BACKEND_URL || 'http://localhost:4000'}/api/contact`

If BACKEND_URL is valid, it becomes:

https://your-render-service.onrender.com/api/contact
Do this now

Go to:

Vercel → Project → Settings → Environment Variables

Find BACKEND_URL and check its value.

It should be exactly:

https://YOUR-ACTUAL-SERVICE.onrender.com

For example:

https://premium-portfolio-backend.onrender.com

Do NOT enter:

https://premium-portfolio-backend.onrender.com/api/contact

and don't enter:

[https://premium-portfolio-backend.onrender.com](https://premium-portfolio-backend.onrender.com)

Just the plain URL.

Also check this

Make sure there is no newline or space in the value.

Then:

Save BACKEND_URL.
Make sure Production is selected.
Go to Deployments.
Redeploy.
One thing I want you to check

If it still fails, don't change your next.config.mjs yet.

Send me the exact value you entered for BACKEND_URL (you can hide/remove the specific service name if you want), or send a screenshot of the Vercel Environment Variables page. I can identify the problem immediately.

Error: Invalid rewrite found
npm error Lifecycle script build failed with error:
npm error code 1
npm error path /vercel/path0/frontend
npm error workspace premium-portfolio-frontend@1.0.0
npm error location /vercel/path0/frontend
npm error command failed
npm error command sh -c next build
Error: Command "npm run build" exited with 1


The error confirms the problem is happening while Next.js is validating the rewrite, before your app even builds. Your next.config.mjs structure is fine; the BACKEND_URL value available during the Vercel build is the thing to fix.

Do this exactly
1. Open Vercel

Go to:

Your Project → Settings → Environment Variables

Find:

BACKEND_URL

Delete it and add it again.

Name:

BACKEND_URL

Value:

https://YOUR-REAL-RENDER-SERVICE.onrender.com

For example:

https://my-portfolio-api.onrender.com

Do not include:

/api/contact

Do not include quotes:

"https://my-portfolio-api.onrender.com"

And make sure there are no spaces or line breaks.

Select Production.

2. Check your Render URL

Open your Render dashboard → your backend service.

Copy the URL shown there.

It should look like:

https://something.onrender.com

Paste that exact URL into Vercel's BACKEND_URL.

3. Redeploy

After saving the variable:

Vercel → Deployments → Redeploy

Don't change next.config.mjs yet.

If it STILL gives "Invalid rewrite"

We can make the configuration more robust so the build doesn't generate an invalid rewrite when the variable is missing.

Replace your current next.config.mjs with:

const backendUrl = process.env.BACKEND_URL;

const nextConfig = {
  async rewrites() {
    if (!backendUrl) {
      return [];
    }

    return [
      {
        source: '/api/contact',
        destination: `${backendUrl.replace(/\/$/, '')}/api/contact`,
      },
    ];
  },

  experimental: {
    typedRoutes: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

This does two useful things:

Prevents an invalid rewrite if BACKEND_URL isn't available.
Removes a trailing / if your Render URL has one.

But first, check the Vercel BACKEND_URL value. That's the most likely cause.

If you send me a screenshot of Vercel → Settings → Environment Variables, I can point out exactly what to select/change.
