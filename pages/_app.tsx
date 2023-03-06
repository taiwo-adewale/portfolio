import type { AppProps } from "next/app";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import { useEffect, useState } from "react";

import "styles/globals.css";
import { Navbar, Footer } from "components";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme")!);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Taiwo Adewale - Frontend Developer Specializing in React JS and Next
          JS
        </title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Discover the world of modern web development with Taiwo Adewale, a frontend developer specializing in React JS and Next JS. Explore cutting-edge web applications and unlock your potential with expert guidance and support."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <meta name="theme-color" content="#13929a" />
        <meta name="msapplication-navbutton-color" content="#13929a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#13929a" />

        <link rel="canonical" href="https://taiwo-adewale.vercel.app" />

        <meta charSet="UTF-8" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Taiwo Adewale - Frontend Developer Specializing in React JS and Next JS"
        />
        <meta
          property="og:description"
          content="Discover the world of modern web development with Taiwo Adewale, a frontend developer specializing in React JS and Next JS. Explore cutting-edge web applications and unlock your potential with expert guidance and support."
        />
        <meta property="og:url" content="https://taiwo-adewale.vercel.app" />
        <meta
          property="og:site_name"
          content="Taiwo Adewale - Frontend Developer Specializing in React JS and Next JS"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Taiwo Adewale - Frontend Developer Specializing in React JS and Next JS"
        />
        <meta name="Discover the world of modern web development with Taiwo Adewale, a frontend developer specializing in React JS and Next JS. Explore cutting-edge web applications and unlock your potential with expert guidance and support." />
      </Head>

      <div className={`${ibmPlexSans.variable} overflow-x-hidden`}>
        <div className="container">
          <div className="flex flex-col min-h-screen">
            <Navbar theme={theme} setTheme={setTheme} />
            <Component {...pageProps} />
            <Footer />

            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALTYICS_MEASUREMENT_ID}`}
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALTYICS_MEASUREMENT_ID}');
        `}
            </Script>
          </div>
        </div>
      </div>
    </>
  );
}
