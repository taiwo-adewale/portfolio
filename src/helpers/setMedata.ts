import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import siteUrl from "./siteUrl";

type IMetadata = {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: OpenGraph;
  twitter?: Twitter;
};

export const setMetadata = (meta: IMetadata = {}): Metadata => {
  const siteName = "Taiwo Adewale - Frontend web developer";

  const title = meta.title || siteName;
  const description = meta.description || undefined;
  const canonical = meta.canonical || undefined;
  const openGraph = meta.openGraph || {};
  const twitter = meta.twitter || {};

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    openGraph: {
      title,
      description,
      locale: "en_US",
      type: "article",
      siteName,
      url: canonical,
      images: [
        {
          url: `${siteUrl}/assets/logo.png`,
          width: 400,
          height: 400,
          alt: siteName,
          type: "image/png",
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `${siteUrl}/assets/logo.png`,
          width: 400,
          height: 400,
          alt: siteName,
        },
      ],
      ...twitter,
    },
  };

  return metadata;
};
