import siteUrl from "@/helpers/siteUrl";

export default async function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/projects/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/services/`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/skills/`,
      lastModified: new Date(),
    },
  ];
}
