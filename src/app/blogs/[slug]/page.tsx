import { BLOGS } from '@/lib/blogs';
import ClientBlogPage from './ClientBlogPage';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = BLOGS.find((b) => b.slug === params.slug);

  return {
    title: blog ? `${blog.slug} | Washrz` : 'Blog',
    description: 'Read expert insights and tips from Washrz.',
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = BLOGS.find((b) => b.slug === params.slug);

  if (!blog) notFound();

  return <ClientBlogPage slug={params.slug} />;
}