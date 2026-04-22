'use client'
import React from 'react';
import Container from '@/components/common/container';
import Link from 'next/link';
import { motion } from 'motion/react';
import { InView } from '@/components/ui/in-view';
import { CalendarBlankIcon } from '@phosphor-icons/react';

const blogsData = [
    {
        id: 1,
        slug: "why-choose-washrz-1",
        title: "Why Choose Washrz Over Other Cleaners?",
        excerpt: "There are many factors that customers consider when choosing a laundry and dry cleaning company. Here are 40 differences that make Washrz stand out...",
        date: "March 3, 2026",
    },
    {
        id: 2,
        slug: "why-choose-washrz-2",
        title: "Why Choose Washrz Over Other Cleaners?",
        excerpt: "There are many factors that customers consider when choosing a laundry and dry cleaning company. Here are 40 differences that make Washrz stand out...",
        date: "March 3, 2026",
    },
    {
        id: 3,
        slug: "why-choose-washrz-3",
        title: "Why Choose Washrz Over Other Cleaners?",
        excerpt: "There are many factors that customers consider when choosing a laundry and dry cleaning company. Here are 40 differences that make Washrz stand out...",
        date: "March 3, 2026",
    },
    {
        id: 4,
        slug: "why-choose-washrz-4",
        title: "Why Choose Washrz Over Other Cleaners?",
        excerpt: "There are many factors that customers consider when choosing a laundry and dry cleaning company. Here are 40 differences that make Washrz stand out...",
        date: "March 3, 2026",
    },
    {
        id: 5,
        slug: "why-choose-washrz-5",
        title: "Why Choose Washrz Over Other Cleaners?",
        excerpt: "There are many factors that customers consider when choosing a laundry and dry cleaning company. Here are 40 differences that make Washrz stand out...",
        date: "March 3, 2026",
    },
    {
        id: 6,
        slug: "why-choose-washrz-6",
        title: "Why Choose Washrz Over Other Cleaners?",
        excerpt: "There are many factors that customers consider when choosing a laundry and dry cleaning company. Here are 40 differences that make Washrz stand out...",
        date: "March 3, 2026",
    }
];

const BlogsPage = () => {
    return (
        <main className="bg-[url('/Assests/Images/background_gradiant.jpg')] bg-cover bg-center bg-fixed min-h-screen text-white pt-24 pb-20">
            <Container>
                {/* ── ALIGNED CONTENT WRAPPER ── */}
                <div className="w-full max-w-[1100px] mx-auto">
                    {/* ── HEADER ── */}
                    <InView
                        viewOptions={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                        }}
                    >
                        <div className="flex flex-col items-center justify-center text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight font-didot">
                                Blogs
                            </h1>
                        </div>
                    </InView>

                    {/* ── BLOG GRID ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogsData.map((blog, idx) => (
                            <InView
                                key={blog.id}
                                viewOptions={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: idx * 0.1 } }
                                }}
                            >
                                <div className="bg-[#121212]/90 backdrop-blur-sm border border-white/5 rounded-[32px] overflow-hidden flex flex-col h-full group">
                                    {/* Image Placeholder */}
                                    <div className="h-56 bg-linear-to-br from-[#00FDC0]/20 to-[#03D391]/40 relative">
                                        <div className="absolute inset-0 bg-[url('/Assests/Images/background_gradiant.png')] bg-cover opacity-30 mix-blend-overlay"></div>
                                    </div>

                                    <div className="p-8 flex flex-col grow">
                                        <Link href={`/blogs/${blog.slug}`}>
                                            <h2 className="text-xl font-bold mb-4 leading-tight group-hover:text-[#03D391] transition-colors">
                                                {blog.title}
                                            </h2>
                                        </Link>
                                        <p className="text-sm text-[#8a928e] leading-relaxed mb-8 grow">
                                            {blog.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <Link
                                                href={`/blogs/${blog.slug}`}
                                                className="bg-[#FACC15] hover:bg-[#eab308] text-black font-bold py-2.5 px-8 rounded-lg text-sm transition-all active:scale-95"
                                            >
                                                Read
                                            </Link>
                                            <div className="flex items-center gap-2 text-[#8a928e] text-xs">
                                                <CalendarBlankIcon size={16} />
                                                <span>{blog.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </InView>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default BlogsPage;