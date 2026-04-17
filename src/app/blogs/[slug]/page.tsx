import ClientBlogPage from './ClientBlogPage';
import { notFound } from 'next/navigation';

// Centralized blog slugs (later you can fetch from DB / JSON)
const BLOG_SLUGS = [
  "why-choose-drydash",
  "laundry-tips",
  "fabric-care-guide"
];

export async function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

// (Optional but powerful) SEO per page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const titles: Record<string, string> = {
    "why-choose-drydash": "Why Choose Drydash | Best Laundry Service",
    "laundry-tips": "Laundry Tips for Better Clothes Care",
    "fabric-care-guide": "Complete Fabric Care Guide"
  };

  return {
    title: titles[slug] || "Blog",
    description: "Read expert insights and tips from Drydash.",
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Safety check (important for static export)
  if (!BLOG_SLUGS.includes(slug)) {
    notFound();
  }

  return <ClientBlogPage slug={slug} />;
}