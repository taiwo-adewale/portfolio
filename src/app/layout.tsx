import { Viewport } from "next";

import "@/app/globals.css";
import Header from "@/containers/header";
import Footer from "@/containers/footer";
import Container from "@/components/Container";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import { setMetadata } from "@/helpers/setMedata";

export const metadata = setMetadata();

export const viewport: Viewport = {
  themeColor: "#0064d6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-dvh grid grid-rows-[auto,1fr,auto]"
        suppressHydrationWarning
      >
        <Header />

        <main className="relative pt-10 pb-24 lg:pt-14">
          <Container>{children}</Container>
        </main>

        <Footer />

        <GoogleAnalytics />
      </body>
    </html>
  );
}
