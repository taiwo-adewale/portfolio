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
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme")!);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Taiwo Adewale - Frontend React Web Developer</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Get in touch with Taiwo Adewale, a top professional web developer that develops scalable and interactive web apps using popular technologies like react js and next js"
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

        <meta name="theme-color" content="#14b8a6" />
        <meta name="msapplication-navbutton-color" content="#14b8a6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#14b8a6" />

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
          content="Taiwo Adewale - Frontend web developer ( Nigeria )"
        />
        <meta
          property="og:description"
          content="Get in touch with Taiwo Adewale, a top professional web developer that develops scalable and interactive web apps using popular technologies like react js and next js"
        />
        <meta property="og:url" content="https://taiwo-adewale.vercel.app" />
        <meta
          property="og:site_name"
          content="Taiwo Adewale - Frontend web developer ( Nigeria )"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Taiwo Adewale - Frontend web developer ( Nigeria )"
        />
        <meta name="Get in touch with Taiwo Adewale, a top professional web developer that develops scalable and interactive web apps using popular technologies like react js and next js" />
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
