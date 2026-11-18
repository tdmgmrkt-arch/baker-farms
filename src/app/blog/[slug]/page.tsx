import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/content/posts/registry";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Baker Farms" };

  return {
    title: `${post.title} | Baker Farms`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.heroImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { Body } = post;
  const related = getRelatedPosts(post.slug, 3);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bakerfarms.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Baker Farms",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Baker Farms",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/bakerfarmslogo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    articleSection: post.category,
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout
        title={post.title}
        excerpt={post.excerpt}
        category={post.category}
        date={post.date}
        readingTime={post.readingTime}
        heroImage={post.heroImage}
      >
        <Body />

        {/* Related posts */}
        {related.length > 0 && (
          <div className="not-prose mt-16 pt-10 border-t border-golden/20">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-6">
              Keep reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(92,64,51,0.06)] hover:shadow-[0_14px_35px_rgba(92,64,51,0.12)] hover:-translate-y-0.5 transition-all duration-400"
                >
                  <div className="relative h-32 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${r.heroImage}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 text-warm-brown/50 text-[10px] uppercase tracking-wider font-semibold mb-2">
                      <Tag className="w-2.5 h-2.5" />
                      {r.category}
                      <span>·</span>
                      <Calendar className="w-2.5 h-2.5" />
                      {formatDate(r.date)}
                    </div>
                    <h4 className="font-serif text-sm font-bold text-charcoal leading-snug group-hover:text-barn-red transition-colors line-clamp-3">
                      {r.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-barn-red font-semibold text-sm hover:gap-3 transition-all"
              >
                Browse all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </BlogPostLayout>
    </>
  );
}
