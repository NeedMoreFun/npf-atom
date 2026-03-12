import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

async function getStrapiData(slug: string) {
  const { isEnabled } = await draftMode();
  
  const baseUrl = process.env.STRAPI_URL || 'http://127.0.0.1:1337';
  
  const query = new URLSearchParams({
    'filters[slug][$eq]': slug,
    'status': isEnabled ? 'draft' : 'published',
    'populate': '*', 
  });

  const res = await fetch(`${baseUrl}/api/pages?${query.toString()}`, {
    cache: isEnabled ? 'no-store' : 'force-cache', 
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  });

  const json = await res.json();
  return json.data?.[0];
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = await getStrapiData(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">{pageData.title}</h1>
      <pre className="mt-4 bg-gray-100 p-4 rounded text-xs">
        {JSON.stringify(pageData, null, 2)}
      </pre>
    </main>
  );
}