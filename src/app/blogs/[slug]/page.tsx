import { BLOGS } from '@/lib/blogs';
import ClientBlogPage from './ClientBlogPage';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  return {
    title: blog ? `${slug} | Washrz` : 'Blog',
    description: 'Read expert insights and tips from Washrz.',
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) notFound();

  return <ClientBlogPage slug={slug} />;
}