import qs from "qs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export async function getPageBySlug(slug: string) {
  const query = qs.stringify({
    filters: {
      slug: { $eq: slug },
    },
    populate: {
      layout: {
        on: {
          "sections.hero": { populate: "*" },
          "sections.menyu": { populate: "*" },
          "sections.osnovnoj-tekst": { populate: "*" },
          "sections.news-feed": { populate: "*" },
        },
      },
    },
  });

  const res = await fetch(`${STRAPI_URL}/api/pages?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();
  console.log("DEBUG STRAPI DATA:", JSON.stringify(data, null, 2));
  return data.data?.[0];
}