import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sriyantratech.com",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/about",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/services",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/contact",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/industries",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/industries/automotive",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/industries/banking",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/industries/manufacturing",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/industries/technology-saas",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/insights",
      lastModified: new Date(),
    },

    {
      url: "https://www.sriyantratech.com/marketing/operating-model",
      lastModified: new Date(),
    },
  ];
}